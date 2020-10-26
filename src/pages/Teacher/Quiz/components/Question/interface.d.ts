export interface IAlternativeQuizFromApi {
  alternativaQuizId: number;
  perguntaQuizId: number;
  enunciado: string;
  letraAlternativa: string;
}

export interface IAlternativeQuiz {
  alternativeQuizId: number;
  questionQuizId: number;
  text: string;
  letterAlternative: string;
}

export interface IQuestionQuizFromApi {
  perguntaQuizId: number;
  quizId: number;
  numeroPergunta: number;
  enunciado: string;
  tempoSegundos: number;
  alternativaCorreta: string;
  alternativaQuiz: IAlternativeQuizFromApi[];
  ordenacaoObjetoQuiz: number;
  quantidadeTotalObjetos: number;
}

export interface IQuestionQuiz {
  questionQuizId: number;
  quizId: number;
  numberQuestion: number;
  text: string;
  timeSeconds: number;
  letterAlternativeCorrect: string;
  alternativeQuiz: IAlternativeQuiz[];
  orderByQuiz: number;
  count: number;
}

export interface IQuestion {
  question: IQuestionQuiz | null;
  onRemove: (questionId: number) => void;
}
