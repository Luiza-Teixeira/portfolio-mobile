import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TechBadge from '@/components/TechBadge';
import {
  buscarCurriculo,
  Projeto,
} from '@/services/api';

type ProjetoVisual = Projeto & {
  tipo: string;
  observacao: string;
};

const filtros = [
  'Todos',
  'Java',
  'React Native',
  'TypeScript',
];

export default function Projetos() {
  const [projetos, setProjetos] = useState<ProjetoVisual[]>([]);
  const [filtro, setFiltro] = useState('Todos');
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregarProjetos() {
      try {
        const curriculo = await buscarCurriculo();

        const projetosAdaptados = curriculo.projetos.map((projeto) => {
          const ehMobile =
            projeto.tecnologias.includes('React Native') ||
            projeto.tecnologias.includes('Expo');

          let observacao = 'Projeto acadêmico';

          if (projeto.nome === 'Estoque Sênior') {
            observacao =
              'Projeto acadêmico em equipe • Cliente real • Em desenvolvimento';
          }

          if (projeto.nome === 'Portfólio Mobile') {
            observacao =
              'Projeto acadêmico • Aplicativo mobile';
          }

          return {
            ...projeto,
            tipo: ehMobile ? 'MOBILE' : 'BACK-END',
            observacao,
          };
        });

        setProjetos(projetosAdaptados);
      } catch (error) {
        console.error(error);
        setErro('Não foi possível carregar os projetos.');
      } finally {
        setCarregando(false);
      }
    }

    carregarProjetos();
  }, []);

  const projetosFiltrados =
    filtro === 'Todos'
      ? projetos
      : projetos.filter((projeto) =>
          projeto.tecnologias.includes(filtro)
        );

  if (carregando) {
    return (
      <View style={styles.estadoContainer}>
        <ActivityIndicator size="large" />

        <Text style={styles.estadoTexto}>
          Carregando projetos...
        </Text>
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.estadoContainer}>
        <Text style={styles.erroTexto}>
          {erro}
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
        <Text style={styles.codigo}>
          {'</>'} PROJETOS
        </Text>

        <Text style={styles.titulo}>
          Meus Projetos
        </Text>

        <Text style={styles.subtitulo}>
          Alguns projetos desenvolvidos durante minha formação e trajetória na área de tecnologia.
        </Text>
      </View>

      <View style={styles.secaoFiltro}>
        <Text style={styles.tituloSecao}>
          Filtrar por tecnologia
        </Text>

        <Text style={styles.explicacaoFiltro}>
          Selecione uma tecnologia para visualizar os projetos relacionados.
        </Text>

        <View style={styles.filtros}>
          {filtros.map((item) => (
            <Pressable
              key={item}
              style={[
                styles.botaoFiltro,
                filtro === item && styles.botaoFiltroAtivo,
              ]}
              onPress={() => setFiltro(item)}
            >
              <Text
                style={[
                  styles.textoFiltro,
                  filtro === item && styles.textoFiltroAtivo,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.resultadoTexto}>
          {projetosFiltrados.length}{' '}
          {projetosFiltrados.length === 1
            ? 'projeto encontrado'
            : 'projetos encontrados'}
        </Text>
      </View>

      <View>
        {projetosFiltrados.map((projeto) => (
          <View
            key={projeto.id}
            style={styles.card}
          >
            <Text style={styles.tipo}>
              {projeto.tipo}
            </Text>

            <Text style={styles.nomeProjeto}>
              {projeto.nome}
            </Text>

            <Text style={styles.observacao}>
              {projeto.observacao}
            </Text>

            <Text style={styles.descricao}>
              {projeto.descricao}
            </Text>

            <Text style={styles.tecnologiasTitulo}>
              Tecnologias
            </Text>

            <View style={styles.tecnologias}>
              {projeto.tecnologias.map((tecnologia) => (
                <TechBadge
                  key={tecnologia}
                  nome={tecnologia}
                />
              ))}
            </View>
          </View>
        ))}
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

  secaoFiltro: {
    marginBottom: 18,
  },

  tituloSecao: {
    color: '#0F172A',
    fontSize: 20,
    fontWeight: '800',
  },

  explicacaoFiltro: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 14,
  },

  filtros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  botaoFiltro: {
    backgroundColor: '#E8EAFE',
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 20,
  },

  botaoFiltroAtivo: {
    backgroundColor: '#0F172A',
  },

  textoFiltro: {
    color: '#4338CA',
    fontSize: 13,
    fontWeight: '700',
  },

  textoFiltroAtivo: {
    color: '#FFFFFF',
  },

  resultado: {
    marginBottom: 14,
  },

  resultadoTexto: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 18,
    padding: 22,
    marginBottom: 18,
  },

  tipo: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 7,
  },

  nomeProjeto: {
    color: '#0F172A',
    fontSize: 22,
    fontWeight: '800',
  },

  observacao: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 5,
  },

  descricao: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 18,
  },

  tecnologiasTitulo: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
  },

  tecnologias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});