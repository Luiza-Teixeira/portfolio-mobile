import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TechBadge from '@/components/TechBadge';

type Projeto = {
  id: number;
  nome: string;
  tipo: string;
  descricao: string;
  tecnologias: string[];
  observacao: string;
};

const projetos: Projeto[] = [
  {
    id: 1,
    nome: 'Estoque Sênior',
    tipo: 'BACK-END',
    descricao:
      'Projeto acadêmico desenvolvido em equipe para gestão de estoque e vendas, com foco em acessibilidade e usabilidade para pessoas idosas. Participo ativamente do desenvolvimento do back-end, contribuindo com funcionalidades de produtos, vendas, estoque, validações, tratamento de exceções e testes.',
    tecnologias: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'PostgreSQL',
      'JUnit ',
      'Mockito',
      'API REST',
      'Arquitetura em Camadas',
    ],
    observacao: 'Projeto acadêmico em equipe • Cliente real • Em desenvolvimento',
  },
  {
    id: 2,
    nome: 'Jogo de Dados',
    tipo: 'MOBILE',
    descricao:
      'Aplicativo mobile de jogo de dados para dois jogadores, com controle de turnos, rodadas, pontuação e resultado final da partida.',
    tecnologias: [
      'React Native',
      'Expo',
      'TypeScript',
      'Expo Router',
    ],
    observacao: 'Projeto acadêmico',
  },
  {
    id: 3,
    nome: 'Portfólio Mobile',
    tipo: 'MOBILE',
    descricao:
      'Aplicativo mobile desenvolvido para apresentar minha formação acadêmica, experiência profissional, conhecimentos técnicos e projetos.',
    tecnologias: [
      'React Native',
      'Expo',
      'TypeScript',
      'Expo Router',
    ],
    observacao: 'Projeto acadêmico',
  },
];

const filtros = [
  'Todos',
  'Java',
  'React Native',
  'TypeScript',
];

export default function Projetos() {
  const [filtro, setFiltro] = useState('Todos');

  const projetosFiltrados =
    filtro === 'Todos'
      ? projetos
      : projetos.filter((projeto) =>
          projeto.tecnologias.includes(filtro)
        );

  return (
    <ScrollView
      style={styles.pagina}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.cabecalho}>
        <Text style={styles.codigo}>{'</>'} PROJETOS</Text>

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