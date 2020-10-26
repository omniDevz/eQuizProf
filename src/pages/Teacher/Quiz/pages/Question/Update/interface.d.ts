export interface IQuizUpdateQuestionParams {
  quizId: string;
  questionId: string;
}

export interface IAlternativeQuizApi {
  alternativaQuizId: number;
  perguntaQuizId: number;
  enunciado: string;
  letraAlternativa: string;
}

export interface IQuestionQuizApi {
  perguntaQuizId: number;
  quizId: number;
  quiz: IQuizApi;
  numeroPergunta: number;
  enunciado: string;
  alternativaCorreta: string;
  tempoSegundos: number;
  ordenacaoObjetoQuiz: number;
  pesoPergunta: number;
  alternativas: IAlternativeQuizApi[];
}

export interface IQuestionQuiz {
  questionQuizId: number;
  quizId: number;
  quiz: IQuiz;
  questionNumber: number;
  enunciated: string;
  correctAlternative: string;
  secondsTime: number;
  sortingObjectQuiz: number;
  weightQuestion: number;
  alternatives: IAlternativeQuiz[];
}
