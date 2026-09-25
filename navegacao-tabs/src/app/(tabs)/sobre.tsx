import { StyleSheet, Text, View } from 'react-native';
 
export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre</Text>
 
      <Text style={styles.texto}>
        Aplicativo desenvolvido para a disciplina
        Programação para Dispositivos Móveis.
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
 