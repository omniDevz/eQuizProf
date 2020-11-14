export interface IResultStudentParams {
  movQuizId: string;
  studentId: string;
}

export interface IResultStudentApi {
  movQuizId: number;
  descricao: string;
  alunoId: number;
  nomeAluno: string;
  quantidadeAcertos: number;
  quantidadeErros: number;
  pontuacao: number;
  respostasAlunoAtual: IResponseStudentApi[];
  respostasDemaisAlunos: IResponseAllStudentsApi[];
}

export interface IResultStudent {
  description: string;
  nameStudent: string;
  totalCorrect: number;
  totalError: number;
  points: number;
  responseStudent: IResponseStudent[];
  responseAllStudents: IResponseAllStudents[];
}

export interface IResponseStudentApi {
  ordenacaoObjetoQuiz: number;
  enunciado: string;
  descricaoAlternativaCorreta: string;
  descricaoAlternativaSelecionada: string;
  pontuacao: number;
  acertou: boolean;
  ePesoPergunta: number;
}

export interface IResponseStudent {
  numberQuestion: number;
  content: string;
  descriptionCorrect: string;
  descriptionSelection: string;
  points: number;
  correct: boolean;
  nivel: number;
}

export interface IResponseAllStudentsApi {
  numeroPergunta: number;
  quantidadeAcertos: number;
}

export interface IResponseAllStudents {
  numberQuestion: number;
  totalCorrect: number;
}
