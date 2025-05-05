import { Title } from '@/components/ui/title';
import { Wrapper } from '@/components/ui/wrapper';
import { CustomText } from '@/components/ui/custom-text';
import { StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Button } from '@/components/ui/button';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();
  const navigate = () => {
    router.replace('/login');
  };
  return (
    <Wrapper style={{ gap: 20 }}>
      <Title text="FinTrack" style={styles.title} />
      <Image
        source={require('@/assets/images/coin.png')}
        style={styles.image}
        contentFit="contain"
      />
      <Title text="Take control of your money" style={styles.control} />
      <CustomText
        text={'Track expenses, set budgets, and save smarter with FinTrack.'}
        style={{ marginHorizontal: 30, fontSize: RFPercentage(1.8) }}
      />
      <Button text={'Get Started'} onPress={navigate} />
      <CustomText
        text={'I already have an account'}
        style={{ marginHorizontal: 30, fontSize: RFPercentage(1.8) }}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width * 0.6,
    height: height * 0.3,
    alignSelf: 'center',
  },
  control: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: RFPercentage(4),
  },
  title: { textAlign: 'center', marginTop: 50 },
});
