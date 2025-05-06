import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Input } from '../ui/input';
import { CustomText } from '../ui/custom-text';
import { colors } from '@/constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Button } from '../ui/button';

import { ButtonDivider } from '../ui/button-divider';
import { useState } from 'react';
export const LoginForm = () => {
  const [securedTextEntry, setSecuredTextEntry] = useState(true);
  const toggleSecure = () => {
    setSecuredTextEntry(!securedTextEntry);
  };
  return (
    <ScrollView style={{ gap: 10 }} showsVerticalScrollIndicator={false}>
      <Input label="Email" placeholder={'Enter your email'} iconName="mail" />
      <Input
        label="Password"
        placeholder={'Enter your password'}
        iconName="lock"
        password={true}
        toggleSecure={toggleSecure}
        securedTextEntry={securedTextEntry}
      />
      <CustomText text="Forgot Password?" style={styles.forgot} />
      <Button text={'Welcome back'} />

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
