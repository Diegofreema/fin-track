import { Wrapper } from '@/components/ui/wrapper';
import { WalletHeading } from '../../components/ui/wallet-heading';
import { LoginAction } from '../../components/ui/login-action';
import { LoginForm } from '../../components/forms/login-form';

const LoginScreen = () => {
  return (
    <Wrapper style={{ gap: 20 }}>
      <WalletHeading
        title={'FinTrack'}
        subTitle={'Smarter money starts here'}
      />
      <LoginAction />
      <LoginForm />
    </Wrapper>
  );
};

export default LoginScreen;
