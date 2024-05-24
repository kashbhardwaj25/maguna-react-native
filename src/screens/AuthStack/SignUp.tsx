import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';

import authStore from '../../store/authStore';
import graphqlRequestClient from '../../services';
import { setAccessToken } from '../../utils/tokensHelper';
import { useRegisterMutation } from '../../services/api/magunaServer';
import { SignUpScreenNavigationProp } from '../../types/navigationTypes';
import { signUpFormValidationSchema } from '../../utils/formValidations';

interface SignUpProps {
  navigation: SignUpScreenNavigationProp;
}

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

const SignUp = ({ navigation }: SignUpProps) => {
  const initialValues: RegisterFormValues = {
    name: '',
    email: '',
    password: '',
  };

  const { setIsLoggedIn } = authStore();

  const { mutate, isPending } = useRegisterMutation(graphqlRequestClient(), {
    onSuccess: async data => {
      if (data.register.accessToken) {
        await setAccessToken(data.register.accessToken);

        setIsLoggedIn(true);
      }
    },
    onError: error => console.log(error),
  });

  const handleRegister = (values: RegisterFormValues) => {
    mutate({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  const goToLoginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpFormValidationSchema}
      onSubmit={handleRegister}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />

          {touched.name && errors.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
          />

          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />

          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <Button
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            onPress={handleSubmit as any}
            title="Register"
            disabled={isPending}
          />

          <TouchableOpacity onPress={goToLoginScreen}>
            <Text style={styles.loginText}>
              Already have an account? Login here.
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
  loginText: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
});

export default SignUp;
