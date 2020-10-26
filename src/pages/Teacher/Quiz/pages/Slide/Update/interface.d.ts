export interface IQuizSlideUpdateParams {
  slideId: string;
  quizId: string;
}

export interface ISlideQuizApi {
  slideQuizId: number;
  quizId: number;
  numeroSlide: number;
  conteudoSlide: string;
  ordenacaoObjetoQuiz: number;
}

export interface ISlideQuiz {
  slideId: number;
  quizId: number;
  slideNumber: number;
  slideContent: string;
  sortingObjectQuiz: number;
}
