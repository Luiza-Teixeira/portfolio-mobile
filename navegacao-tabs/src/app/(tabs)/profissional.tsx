import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SectionTitle from '@/components/SectionTitle';
import TechBadge from '@/components/TechBadge';

export default function Profissional() {
  return (
    <ScrollView
      style={styles.pagina}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.cabecalho}>
        <Text style={styles.codigo}>{'</>'} EXPERIÊNCIA</Text>

        <Text style={styles.titulo}>
          Experiência Profissional
        </Text>

        <Text style={styles.subtitulo}>
          Minha atuação profissional na área de desenvolvimento de software.
        </Text>
      </View>

      <View style={styles.secao}>
        <SectionTitle>Atuação atual</SectionTitle>

        <View style={styles.card}>
          <Text style={styles.tipo}>BACK-END</Text>

          <Text style={styles.cargo}>
            Desenvolvedora Back-end Java Júnior
          </Text>

          <Text style={styles.area}>
            Sustentação de sistemas bancários
          </Text>

          <View style={styles.status}>
            <View style={styles.statusPonto} />

            <Text style={styles.statusTexto}>
              Em atuação
            </Text>
          </View>

          <Text style={styles.descricao}>
            Atuação na sustentação de sistemas bancários, com foco em
            desenvolvimento e manutenção de aplicações back-end em Java.
            Experiência com Spring Boot, arquiteturas Hexagonal e Arquitetura em Camadas,
            trabalhando em equipe sob metodologia ágil Scrum.
          </Text>
        </View>
      </View>

      <View style={styles.secao}>
        <SectionTitle>Tecnologias e práticas</SectionTitle>

        <View style={styles.card}>
          <Text style={styles.categoria}>Back-end</Text>

          <View style={styles.tecnologias}>
            <TechBadge nome="Java" />
            <TechBadge nome="Spring Boot" />
          </View>

          <Text style={styles.categoria}>Arquitetura</Text>

          <View style={styles.tecnologias}>
            <TechBadge nome="Arquitetura Hexagonal" />
            <TechBadge nome="Arquitetura em Camadas" />
          </View>

          <Text style={styles.categoria}>Metodologia</Text>

          <View style={styles.tecnologias}>
            <TechBadge nome="Scrum" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  container: {
    padding: 22,
    paddingTop: 30,
    paddingBottom: 40,
  },

  cabecalho: {
    backgroundColor: '#0F172A',
    borderRadius: 24,
    padding: 28,
    marginBottom: 32,
  },

  codigo: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 16,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
  },

  subtitulo: {
    color: '#94A3B8',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },

  secao: {
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 16,
    padding: 20,
  },

  tipo: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 8,
  },

  cargo: {
    color: '#0F172A',
    fontSize: 22,
    fontWeight: '800',
  },

  area: {
    color: '#64748B',
    fontSize: 15,
    marginTop: 5,
  },

  status: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 16,
  },

  statusPonto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22C55E',
    marginRight: 7,
  },

  statusTexto: {
    color: '#475569',
    fontSize: 13,
    fontWeight: '600',
  },

  descricao: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 18,
  },

  categoria: {
    color: '#475569',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 9,
    marginTop: 14,
  },

  tecnologias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});