import { StyleSheet, Text, TextInput, View } from 'react-native';
import { CustomText } from '@/components/ui/custom-text';
import { colors } from '@/constants';
import { AntDesign } from '@expo/vector-icons';
export const Input = ({ label, placeholder, iconName }) => {
  return (
    <View style={styles.container}>
      <CustomText text={label} style={styles.label} />
      <View style={styles.inputContainer}>
        <AntDesign name={iconName} size={24} color={colors.grey} />
        <TextInput style={styles.input} placeholder={placeholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },

  label: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    textAlign: 'left',
  },
  inputContainer: {
    borderColor: '#eee',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  input: {
    color: '#000',
    fontSize: 16,
    flex: 1,
  },
});
