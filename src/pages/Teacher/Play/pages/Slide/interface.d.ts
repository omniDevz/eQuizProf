
export interface ISlidePage {
  slide?: ISlideQuiz | null;
  totalObject: number;
}

export interface ISlideQuiz {
  numberSlide: number;
  slideQuizId: number;
  orderByQuiz: number;
  quizId: number;
  content: string;
  count: number;
}
