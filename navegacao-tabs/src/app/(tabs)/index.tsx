import { router } from 'expo-router';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SectionTitle from '@/components/SectionTitle';
import TechBadge from '@/components/TechBadge';

export default function Home() {
  return (
    <ScrollView
      style={styles.pagina}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <Text style={styles.codigo}>{'</>'} PORTFÓLIO</Text>

        <Image
          source={require('../../../assets/images/perfil.jpg')}
          style={styles.fotoPerfil}
          resizeMode="cover"
        />

        <Text style={styles.nome}>Luiza Teixeira</Text>

        <Text style={styles.subtitulo}>
          Estudante de Sistemas para Internet • Desenvolvedora Back-end Java Júnior
        </Text>

        <View style={styles.status}>
          <View style={styles.statusPonto} />
          <Text style={styles.statusTexto}>
            Desenvolvedora em atuação
          </Text>
        </View>

        <Text style={styles.apresentacao}>
          Estudante de Sistemas para Internet na Universidade Católica de Pernambuco
          e desenvolvedora Back-end Java Júnior na Capgemini. Concilio minha
          formação acadêmica com a experiência profissional na área de tecnologia,
          buscando aprimorar continuamente meus conhecimentos em desenvolvimento
          de software.
        </Text>
      </View>

      <View style={styles.secao}>
        <SectionTitle>Stack & conhecimentos</SectionTitle>

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

        <Text style={styles.categoria}>Mobile / Front-end</Text>
        <View style={styles.tecnologias}>
          <TechBadge nome="JavaScript" />
          <TechBadge nome="TypeScript" />
          <TechBadge nome="React Native" />
          <TechBadge nome="Expo" />
        </View>

        <Text style={styles.categoria}>Ferramentas</Text>
        <View style={styles.tecnologias}>
          <TechBadge nome="Git" />
        </View>
      </View>

      <View style={styles.secao}>
        <SectionTitle>Explore meu portfólio</SectionTitle>

        <Pressable
          style={styles.card}
          onPress={() => router.push('/projetos')}
        >
          <Text style={styles.cardNumero}>01</Text>

          <Text style={styles.cardTitulo}>
            Projetos
          </Text>

          <Text style={styles.cardTexto}>
            Aplicações e projetos desenvolvidos durante minha formação.
          </Text>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => router.push('/profissional')}
        >
          <Text style={styles.cardNumero}>02</Text>

          <Text style={styles.cardTitulo}>
            Experiência profissional
          </Text>

          <Text style={styles.cardTexto}>
            Minha trajetória, experiências e atuação profissional.
          </Text>
        </Pressable>
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

  hero: {
    backgroundColor: '#0F172A',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    marginBottom: 32,
  },

  codigo: {
    color: '#38BDF8',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 22,
  },

  fotoPerfil: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#38BDF8',
    marginBottom: 18,
  },

  nome: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 15,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 6,
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 18,
  },

  statusPonto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22C55E',
    marginRight: 7,
  },

  statusTexto: {
    color: '#CBD5E1',
    fontSize: 13,
    fontWeight: '600',
  },

  apresentacao: {
    fontSize: 15,
    color: '#CBD5E1',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 18,
    maxWidth: 550,
  },

  secao: {
    marginBottom: 30,
  },

  categoria: {
    fontSize: 14,
    fontWeight: '700',
    color: '#475569',
    marginTop: 14,
    marginBottom: 8,
  },

  tecnologias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 4,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  cardNumero: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 7,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 5,
  },

  cardTexto: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
});