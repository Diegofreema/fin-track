import { Text, View, StyleSheet } from 'react-native';
import { Input } from '../ui/input';
import { CustomText } from '../ui/custom-text';
import { colors } from '@/constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Button } from '../ui/button';
export const LoginForm = () => {
  return (
    <View style={{ gap: 10 }}>
      <Input label="Email" placeholder={'Enter your email'} iconName="mail" />
      <Input
        label="Password"
        placeholder={'Enter your password'}
        iconName="lock"
      />
      <CustomText text="Forgot Password?" style={styles.forgot} />
      <Button text={'Login'} />
      <Button
        text={'Sign in with Google'}
        style={styles.google}
        textStyle={{ color: 'black' }}
        source={require('@/assets/images/google.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  forgot: {
    color: colors.blue,
    fontSize: RFPercentage(2),
    fontWeight: '600',
    textAlign: 'right',
  },
  google: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#eee',
  },
});
