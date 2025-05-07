import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CustomText } from '../ui/custom-text';
import { useRouter } from 'expo-router';
// npm install react-hook-form
// npm install @hookform/resolvers
// npm install zod
export const ForgotForm = () => {
  const router = useRouter();
  const onPress = () => {
    router.push('/login');
  };
  return (
    <View style={{ gap: 20 }}>
      <Input label="Email" placeholder={'Enter your email'} iconName="mail" />
      <Button text={'Send reset link'} />
      <CustomText text="Back to sign in" onPress={onPress} />
    </View>
  );
};
