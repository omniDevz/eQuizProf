import { IMovQuiz, IQuiz } from '../../interface';

export interface IPlayAwaitParams {
  quiz: IQuiz;
  movQuizId: number;
  setCurrentObject: React.Dispatch<React.SetStateAction<number>>;
  setStatusQuiz: React.Dispatch<React.SetStateAction<number>>;
}

export interface IPersonApi {
  pessoaId: number;
  nome: string;
  sobrenome: string;
}

export interface IPerson {
  personId: number;
  firstName: string;
  lastName: string;
}

export interface IStudentApi {
  alunoId: number;
  pessoaId: number;
  pessoa: IPersonApi;
}

export interface IStudent {
  studentId: number;
  personId: number;
  person: IPerson;
}

export interface IMovQuizApi {
  statusQuiz: number;
  codigoAcesso: string;
}

export interface IMovQuizAwait {
  statusQuiz: number;
  codeAccess: string;
}

export interface IMovStudentQuizApi {
  movQuizAlunoId: number;
  movQuizId: number;
  movQuiz: IMovQuizApi;
  alunoId: number;
  alunos: IStudentApi[];
}

export interface IMovStudentQuiz {
  movStudentQuizId: number;
  movQuizId: number;
  movQuiz: IMovQuizAwait;
  student: IStudent[];
}
