
export interface ISlidePage {
  slide?: ISlideQuiz | null;
  totalObject: number;
  handleNextObjectInQuiz: (nextObject: number) => void;
}

export interface ISlideQuiz {
  numberSlide: number;
  slideQuizId: number;
  orderByQuiz: number;
  quizId: number;
  content: string;
  count: number;
}
