export interface ISlideQuizFromApi {
  ordenacaoObjetoQuiz: number;
  quantidadeTotalObjetos: number;
  slideQuizId: number;
  numeroSlide: number;
  conteudoSlide: string;
  quizId: number;
}

export interface ISlideQuiz {
  numberSlide: number;
  slideQuizId: number;
  orderByQuiz: number;
  quizId: number;
  content: string;
  count: number;
}

export interface ISlide {
  slide: ISlideQuiz | null;
}
