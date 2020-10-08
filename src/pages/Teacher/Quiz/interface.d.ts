export interface IQuizApi {
  quizId: number;
  nome: string;
  descricao: string;
  codigo: string;
}

export interface IQuiz {
  quizId: number;
  name: string;
  description: string;
  code?: string;
}
