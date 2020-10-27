export interface IPlayParams {
  movQuizId: string;
}

export interface IQuizApi {
  quizId: number;
  nome: string;
  descricao?: string | null;
}

export interface IQuiz {
  quizId: number;
  name: string;
  description?: string | null;
}

export interface IMovQuizApi {
  movQuizId: number;
  quizId: number;
  quiz: IQuizApi;
  codigoAcesso?: string | null;
  dataHoraInicio: string;
  dataHoraFim?: string | null;
  statusQuiz: number;
  perguntaAtual?: number | null;
}

export interface IMovQuiz {
  movQuizId: number;
  quizId: number;
  quiz: IQuiz;
  accessCode?: string | null;
  dateTimeStart: string;
  dateTimeFinish?: string | null;
  statusQuiz: number;
  currentQuestion?: number | null;
}
