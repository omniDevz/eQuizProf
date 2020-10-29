import { RouteComponentProps } from 'react-router';

import {
  IQuestionQuiz,
  IQuestionQuizFromApi,
} from '../../components/Question/interface';

import {
  ISlideQuiz,
  ISlideQuizFromApi,
} from '../../components/Slide/interface';

export interface IQuizUpdateParams {
  quizId: string;
}

export interface IQuiz {
  quizId: number;
  name: string;
  description: string;
  onlyStudentsLogged: boolean;
}
export interface IQuizApi {
  quizId: number;
  nome: string;
  descricao: string;
  somenteAlunosCadastrados: boolean;
}
