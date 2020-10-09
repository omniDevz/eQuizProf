import { RouteComponentProps } from 'react-router';

import {
  IQuestionQuiz,
  IQuestionQuizFromApi,
} from '../../components/Question/interface';

import {
  ISlideQuiz,
  ISlideQuizFromApi,
} from '../../components/Slide/interface';

export interface ParamsProps {
  quizId: string;
}

export interface IQuizByIdFromApi {
  slideQuiz: ISlideQuizFromApi | null;
  perguntaQuiz: IQuestionQuizFromApi | null;
  ordenacaoObjetoQuiz: number;
  quantidadeTotalObjetos: number;
}

export interface IQuizById {
  slideQuiz: ISlideQuiz | null;
  questionQuiz: IQuestionQuiz | null;
  orderByQuiz: number;
  count: number;
}
