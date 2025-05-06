import { StyleSheet, Text, View } from 'react-native';

export const ButtonDivider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Or continue with</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 20,
  },
  line: {
    height: 1,
    backgroundColor: '#eee',
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
});
