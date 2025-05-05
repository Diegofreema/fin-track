import { Image } from 'expo-image';

import { StyleSheet, Text, View } from 'react-native';

import { CustomText } from '@/components/ui/custom-text';

import { RFPercentage } from 'react-native-responsive-fontsize';

export const WalletHeading = ({ title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/wallet.png')}
        style={styles.image}
      />
      {title && <CustomText text={title} style={styles.title} />}
      {subTitle && <CustomText text={subTitle} style={styles.subTitle} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: RFPercentage(3.5),
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
  },
});
