import { StyleSheet, Text, View } from 'react-native';
import { Wrapper } from '@/components/ui/wrapper';
import { WalletHeading } from '../../components/ui/wallet-heading';
import { Title } from '@/components/ui/title';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { ForgotForm } from '../../components/forms/forgot-form';
export default function forgot() {
  return (
    <Wrapper style={{ gap: 20 }}>
      <WalletHeading />
      <Title text="FinTrack" style={styles.title} />
      <Title
        text="Enter your email to receive reset instructions."
        style={styles.subTitle}
      />
      <ForgotForm />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  title: { textAlign: 'center' },
  subTitle: {
    textAlign: 'center',
    width: '80%',
    marginHorizontal: 'auto',
    color: '#ccc',
    fontSize: RFPercentage(2),
  },
});
