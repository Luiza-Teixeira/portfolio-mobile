import { StyleSheet, Text, View } from 'react-native';
 
export default function Inicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Início</Text>
      <Text style={styles.texto}>
        Bem-vindo ao aplicativo!
      </Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
  },
});
 