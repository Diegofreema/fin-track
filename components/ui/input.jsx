import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { CustomText } from '@/components/ui/custom-text';
import { colors } from '@/constants';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Controller } from 'react-hook-form';
export const Input = ({
  label,
  placeholder,
  iconName,
  toggleSecure,
  password,
  securedTextEntry,
  control,
  errors,
  name,
  type = 'default',
  autoCapitalize = 'sentences',
}) => {
  return (
    <View style={styles.container}>
      <CustomText text={label} style={styles.label} />
      <View style={styles.inputContainer}>
        <AntDesign name={iconName} size={24} color={colors.grey} />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              secureTextEntry={securedTextEntry}
              keyboardType={type}
              autoCapitalize={autoCapitalize}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name={name}
        />
        {password && (
          <TouchableOpacity onPress={toggleSecure}>
            <Feather
              name={securedTextEntry ? 'eye-off' : 'eye'}
              size={24}
              color={colors.grey}
            />
          </TouchableOpacity>
        )}
      </View>
      {errors[name] && (
        <Text style={styles.error}>{errors?.[name]?.message}</Text>
      )}
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
  error: {
    fontSize: 15,

    color: 'red',
  },
});
