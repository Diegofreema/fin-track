import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Input } from '../ui/input';
import { CustomText } from '../ui/custom-text';
import { colors } from '@/constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Button } from '../ui/button';

import { ButtonDivider } from '../ui/button-divider';
import { useState } from 'react';

import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../lib/validators/login-schema';
export const LoginForm = () => {
  const [securedTextEntry, setSecuredTextEntry] = useState(true);
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data) => {
    console.log(data);
  };

  const router = useRouter();
  const toggleSecure = () => {
    setSecuredTextEntry(!securedTextEntry);
  };

  const onPress = () => {
    router.push('/forgot');
  };
  return (
    <ScrollView style={{ gap: 10 }} showsVerticalScrollIndicator={false}>
      <Input
        label="Email"
        placeholder={'Enter your email'}
        iconName="mail"
        type="email-address"
        autoCapitalize="none"
        errors={errors}
        control={control}
        name={'email'}
      />
      <Input
        label="Password"
        placeholder={'Enter your password'}
        iconName="lock"
        password={true}
        toggleSecure={toggleSecure}
        securedTextEntry={securedTextEntry}
        autoCapitalize="none"
        errors={errors}
        control={control}
        name={'password'}
      />
      <CustomText
        text="Forgot Password?"
        style={styles.forgot}
        onPress={onPress}
      />
      <Button text={'Welcome back'} onPress={handleSubmit(onSubmit)} />

      <ButtonDivider />

      <Button
        text={'Sign in with Google'}
        style={styles.google}
        textStyle={{ color: 'black' }}
        source={require('@/assets/images/google.png')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  forgot: {
    color: colors.blue,
    fontSize: RFPercentage(2),
    fontWeight: '600',
    textAlign: 'right',
    marginBottom: 20,
  },
  google: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#eee',
  },
});
