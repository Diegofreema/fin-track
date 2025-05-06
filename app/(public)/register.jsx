import { View, Text } from 'react-native';
import { Wrapper } from '@/components/ui/wrapper';
import { WalletHeading } from '../../components/ui/wallet-heading';
import { RegisterForm } from '../../components/forms/register-form';
const Register = () => {
  return (
    <Wrapper style={{ gap: 20 }}>
      <WalletHeading title={'FinTrack'} subTitle={'Let’s get you started'} />
      <RegisterForm />
    </Wrapper>
  );
};

export default Register;
