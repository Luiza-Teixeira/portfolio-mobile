import { StyleSheet, Text, View } from 'react-native';

type TechBadgeProps = {
  nome: string;
};

export default function TechBadge({ nome }: TechBadgeProps) {
  return (
    <View style={styles.badge}>
      <Text style={styles.texto}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#E8EAFE',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
  },
  texto: {
    color: '#4338CA',
    fontSize: 13,
    fontWeight: '600',
  },
});