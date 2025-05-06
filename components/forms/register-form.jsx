import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Input } from '../ui/input';
import { useState } from 'react';
import { Button } from '../ui/button';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colors } from '@/constants';
import { useRouter } from 'expo-router';
export const RegisterForm = () => {
  const [securedTextEntry, setSecuredTextEntry] = useState(true);
  const toggleSecure = () => {
    setSecuredTextEntry(!securedTextEntry);
  };
  const [securedTextEntry2, setSecuredTextEntry2] = useState(true);
  const router = useRouter();
  const toggleSecure2 = () => {
    setSecuredTextEntry2(!securedTextEntry2);
  };
  const onPress = () => {
    router.push('/login');
  };
  return (
    <ScrollView
      contentContainerStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Input
        placeholder={'Enter your full name'}
        label={'Full name'}
        iconName={'user'}
      />
      <Input
        placeholder={'Enter your email address'}
        label={'Email'}
        iconName={'mail'}
      />
      <Input
        label="Password"
        placeholder={'Create password'}
        iconName="lock"
        password={true}
        toggleSecure={toggleSecure}
        securedTextEntry={securedTextEntry}
      />
      <Input
        label="Confirm Password"
        placeholder={'Confirm password'}
        iconName="lock"
        password={true}
        toggleSecure={toggleSecure2}
        securedTextEntry={securedTextEntry2}
      />

      <View style={{ marginTop: 20, gap: 20 }}>
        <Button
          text={'Sign up with Google'}
          style={styles.google}
          textStyle={{ color: 'black' }}
          source={require('@/assets/images/google.png')}
        />
        <Button text={'Create Account'} />
        <Text style={styles.text}>
          Already have an account?{' '}
          <Text onPress={onPress} style={styles.signIn}>
            Sign in
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  google: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#eee',
  },
  text: {
    fontSize: RFPercentage(2),
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  signIn: {
    color: colors.blue,
  },
});
