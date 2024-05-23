import { Formik } from 'formik';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

import { LoginScreenNavigationProp } from '../../types/navigationTypes';
import { loginFormValidationSchema } from '../../utils/formValidations';

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = ({ navigation }: LoginScreenProps) => {
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const handleLogin = (values: LoginFormValues) => {
    console.log('Login values:', values);
  };

  const goToRegisterScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormValidationSchema}
      onSubmit={handleLogin}>
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

          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Button onPress={handleSubmit as any} title="Login" />

          <TouchableOpacity onPress={goToRegisterScreen}>
            <Text style={styles.registerText}>New user? Register here.</Text>
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
  registerText: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
});

export default Login;
