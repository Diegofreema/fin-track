import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '@/constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Image } from 'expo-image';
export const Button = ({ text, onPress, style, textStyle, source }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.button, style]}
    >
      {source && (
        <Image source={source} style={styles.image} contentFit="contain" />
      )}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  text: {
    color: colors.white,
    fontSize: RFPercentage(2),
    fontWeight: '600',
  },
  image: {
    width: 20,
    height: 20,
  },
});
