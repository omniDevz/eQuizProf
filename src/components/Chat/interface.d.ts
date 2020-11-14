export interface IChatComponent {
  movQuizId: number;
}

export interface ChatProps {
  chatOpen: boolean;
}

export interface IPersonApi {
  pessoaId: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  dataNascimento: string;
  sexo: string;
  email: string;
  numero: number;
  usuario: string;
  token: string | null;
  dataExpiracao: string | null;
  telefoneId: number | null;
  enderecoId: number | null;
  ultimoUsuarioAlteracao: number;
}

export interface IStudentApi {
  alunoId: number;
  pessoaId: number;
  pessoa: IPersonApi;
  eAssinante: boolean;
  observacao: string;
  ultimoUsuarioAlteracao: number;
}


export interface IChatMessageApi {
  movQuizChatId: number;
  movQuizId: number;
  alunoId: number;
  aluno: IStudentApi;
  mensagem: string;
}

export interface IChatMessage {
  movQuizChatId: number;
  movQuizId?: number;
  studentId?: number;
  message: string;
  nameStudent?: string
}

