import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SectionTitle from '@/components/SectionTitle';
import TechBadge from '@/components/TechBadge';

export default function Sobre() {
  return (
    <ScrollView
      style={styles.pagina}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.cabecalho}>
        <Text style={styles.codigo}>{'</>'} SOBRE O PROJETO</Text>

        <Text style={styles.titulo}>Portfolio Mobile</Text>

        <Text style={styles.subtitulo}>
          Aplicativo desenvolvido com React Native e Expo
        </Text>
      </View>

      <View style={styles.secao}>
        <SectionTitle>Sobre este aplicativo</SectionTitle>

        <View style={styles.card}>
          <Text style={styles.texto}>
            Este aplicativo foi desenvolvido como um portfólio profissional
            mobile para apresentar minha formação acadêmica, experiência
            profissional, conhecimentos técnicos e projetos desenvolvidos.
          </Text>

          <Text style={styles.textoSecundario}>
            O projeto também aplica conceitos estudados na disciplina de
            Programação para Dispositivos Móveis, como componentização,
            navegação entre telas, estilização e gerenciamento de estado.
          </Text>
        </View>
      </View>

      <View style={styles.secao}>
        <SectionTitle>Tecnologias utilizadas</SectionTitle>

        <View style={styles.card}>
          <Text style={styles.categoria}>Desenvolvimento mobile</Text>

          <View style={styles.tecnologias}>
            <TechBadge nome="React Native" />
            <TechBadge nome="Expo" />
            <TechBadge nome="TypeScript" />
            <TechBadge nome="React" />
          </View>

          <Text style={styles.categoria}>Navegação e interface</Text>

          <View style={styles.tecnologias}>
            <TechBadge nome="Expo Router" />
            <TechBadge nome="StyleSheet" />
          </View>

          <Text style={styles.categoria}>Versionamento</Text>

          <View style={styles.tecnologias}>
            <TechBadge nome="Git" />
            <TechBadge nome="GitHub" />
          </View>
        </View>
      </View>

      <View style={styles.secao}>
        <SectionTitle>Funcionalidade extra</SectionTitle>

        <View style={styles.destaque}>
          <Text style={styles.destaqueNumero}>01</Text>

          <Text style={styles.destaqueTitulo}>
            Filtro de projetos por tecnologia
          </Text>

          <Text style={styles.destaqueTexto}>
            Na tela de projetos, o usuário poderá selecionar uma tecnologia
            para visualizar somente os projetos relacionados àquela categoria,
            facilitando a exploração do portfólio.
          </Text>
        </View>
      </View>

      <View style={styles.secao}>
        <SectionTitle>Arquitetura do aplicativo</SectionTitle>

        <View style={styles.card}>
          <Text style={styles.fluxo}>Interface Mobile</Text>
          <Text style={styles.seta}>↓</Text>
          <Text style={styles.fluxo}>React Native + Expo</Text>
          <Text style={styles.seta}>↓</Text>
          <Text style={styles.fluxo}>Expo Router</Text>
          <Text style={styles.seta}>↓</Text>
          <Text style={styles.fluxo}>API / Back-end</Text>

          <Text style={styles.observacao}>
            A integração com o back-end será responsável por fornecer os dados
            exibidos no portfólio.
          </Text>
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

  texto: {
    color: '#334155',
    fontSize: 15,
    lineHeight: 23,
  },

  textoSecundario: {
    color: '#64748B',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 14,
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

  destaque: {
    backgroundColor: '#0F172A',
    borderRadius: 16,
    padding: 20,
  },

  destaqueNumero: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 8,
  },

  destaqueTitulo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },

  destaqueTexto: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 22,
  },

  fluxo: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },

  seta: {
    color: '#38BDF8',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 4,
  },

  observacao: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 16,
  },
});