import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SectionTitle from '@/components/SectionTitle';
import TechBadge from '@/components/TechBadge';
import {
  buscarCurriculo,
  Formacao,
} from '@/services/api';

export default function Academica() {
  const [formacao, setFormacao] = useState<Formacao | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregarFormacao() {
      try {
        const curriculo = await buscarCurriculo();

        if (curriculo.formacoes.length > 0) {
          setFormacao(curriculo.formacoes[0]);
        } else {
          setErro('Nenhuma formação acadêmica encontrada.');
        }
      } catch (error) {
        console.error(error);
        setErro('Não foi possível carregar a formação acadêmica.');
      } finally {
        setCarregando(false);
      }
    }

    carregarFormacao();
  }, []);

  if (carregando) {
    return (
      <View style={styles.estadoContainer}>
        <ActivityIndicator size="large" />
        <Text style={styles.estadoTexto}>
          Carregando formação...
        </Text>
      </View>
    );
  }

  if (erro || !formacao) {
    return (
      <View style={styles.estadoContainer}>
        <Text style={styles.erroTexto}>
          {erro || 'Não foi possível carregar a formação.'}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.pagina}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.cabecalho}>
        <Text style={styles.codigo}>{'</>'} FORMAÇÃO</Text>

        <Text style={styles.titulo}>
          Experiência Acadêmica
        </Text>

        <Text style={styles.subtitulo}>
          Minha trajetória acadêmica e conhecimentos desenvolvidos durante a formação.
        </Text>
      </View>

      <View style={styles.secao}>
        <SectionTitle>Formação atual</SectionTitle>

        <View style={styles.card}>
          <Text style={styles.tipo}>GRADUAÇÃO</Text>

          <Text style={styles.curso}>
            {formacao.curso}
          </Text>

          <Text style={styles.instituicao}>
            {formacao.instituicao}
          </Text>

          <View style={styles.status}>
            <View style={styles.statusPonto} />

            <Text style={styles.statusTexto}>
              {formacao.status}
            </Text>
          </View>

          <Text style={styles.descricao}>
            Formação voltada ao desenvolvimento de soluções de software,
            aplicações web e mobile, integração de serviços, arquitetura de
            sistemas e utilização de tecnologias aplicadas ao desenvolvimento
            de aplicações.
          </Text>
        </View>
      </View>

      <View style={styles.secao}>
        <SectionTitle>Áreas de estudo</SectionTitle>

        <View style={styles.card}>
          <View style={styles.tecnologias}>
            {formacao.areas.map((area) => (
              <TechBadge
                key={area}
                nome={area}
              />
            ))}
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

  estadoContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  estadoTexto: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 12,
  },

  erroTexto: {
    color: '#B91C1C',
    fontSize: 15,
    textAlign: 'center',
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

  curso: {
    color: '#0F172A',
    fontSize: 22,
    fontWeight: '800',
  },

  instituicao: {
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

  tecnologias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});