import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';

import { otpFormValidationSchema } from '../../utils/formValidations';

interface OTPFormValues {
  otp: string;
}

const VerifyEmail = () => {
  const initialValues: OTPFormValues = {
    otp: '',
  };

  const handleOTPVerification = (values: OTPFormValues) => {
    console.log('OTP values:', values);
  };

  const handleResendOTP = () => {
    console.log('Resend verification OTP');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={otpFormValidationSchema}
      onSubmit={handleOTPVerification}>
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
            placeholder="Enter OTP"
            onChangeText={handleChange('otp')}
            onBlur={handleBlur('otp')}
            value={values.otp}
            keyboardType="numeric"
            maxLength={6}
          />

          {touched.otp && errors.otp && (
            <Text style={styles.errorText}>{errors.otp}</Text>
          )}

          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Button onPress={handleSubmit as any} title="Verify OTP" />

          <TouchableOpacity onPress={handleResendOTP}>
            <Text style={styles.resendText}>Resend verification OTP</Text>
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
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
  resendText: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
});

export default VerifyEmail;
