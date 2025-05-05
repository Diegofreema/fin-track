import { StyleSheet, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Title = ({ text, style }) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: RFPercentage(3.5),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
});
