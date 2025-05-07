import { StyleSheet, Text } from 'react-native';
import { colors } from '@/constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
export const CustomText = ({ text, style, onPress }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <Text onPress={handlePress} style={[styles.text, style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: RFPercentage(1.5),
    color: colors.grey,
    fontWeight: '400',
    textAlign: 'center',
  },
});
