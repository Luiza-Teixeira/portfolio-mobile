export type Formacao = {
  id: number;
  curso: string;
  instituicao: string;
  status: string | null;
  areas: string[];
  pessoaId: number;
};

export type Experiencia = {
  id: number;
  cargo: string;
  descricao: string | null;
  tecnologias: string[];
  pessoaId: number;
};

export type Projeto = {
  id: number;
  nome: string;
  descricao: string | null;
  status: string | null;
  tecnologias: string[];
  pessoaId: number;
};

export type Curriculo = {
  id: number;
  nome: string;
  titulo: string;
  resumo: string | null;
  formacoes: Formacao[];
  experiencias: Experiencia[];
  projetos: Projeto[];
};

const API_URL = 'https://portfolio-backend-eosin-nine.vercel.app';

const PESSOA_ID = 2;

export async function buscarCurriculo(): Promise<Curriculo> {
  const resposta = await fetch(
    `${API_URL}/pessoas/${PESSOA_ID}/curriculo`
  );

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar o currículo.');
  }

  return resposta.json();
}