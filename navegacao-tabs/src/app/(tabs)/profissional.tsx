import { StyleSheet, Text, View } from 'react-native';

export default function Profissional() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Experiência Profissional</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});