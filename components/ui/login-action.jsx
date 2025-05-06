import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '@/constants';
import { CustomText } from '@/components/ui/custom-text';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useRouter } from 'expo-router';
export const LoginAction = () => {
  const router = useRouter();
  const onPress = () => {
    router.push('/register');
  };
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <CustomText text="Welcome back" style={styles.welcomeText} />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.account}
        onPress={onPress}
      >
        <CustomText text={'Create Account'} style={styles.accountText} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.milk,
    borderRadius: 12,
    overflow: 'hidden',
  },
  account: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  accountText: {
    fontSize: RFPercentage(2),
    color: colors.black,
    fontWeight: '600',
  },
  welcome: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.blue,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  welcomeText: {
    color: colors.white,
    fontSize: RFPercentage(2),
    fontWeight: '600',
  },
});
