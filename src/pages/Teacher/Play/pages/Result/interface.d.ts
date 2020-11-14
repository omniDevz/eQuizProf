export interface IResultPage {
  movQuizId: string;
  onlyStudentsLogged: boolean;
}

export interface IResultStudentApi {
  movQuizId: number;
  descricao: string;
  alunoId: number;
  nomeAluno: string;
  acertou: number;
  errou: number;
  pontuacao: number;
}

export interface IResultStudent {
  studentId: number;
  nameStudent: string;
  correct: number;
  error: number;
  points: number;
}
