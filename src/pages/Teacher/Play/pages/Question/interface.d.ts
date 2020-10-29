export interface ButtonsProps {
  active: 1 | 2 | 3 | 4;
  correct: 1 | 2 | 3 | 4;
}

export interface IAlternativeQuiz {
  alternativeQuizId: number;
  questionQuizId: number;
  text: string;
  letterAlternative: string;
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

export interface IQuestionPage {
  question?: IQuestionQuiz | null;
  totalObject: number;
  handleNextObjectInQuiz: (nextObject: number) => void;
  handleInitNewQuestion: (questionQuizId: number) => void;
}
