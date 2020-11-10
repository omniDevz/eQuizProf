export interface IPlayParams {
  movQuizId: string;
}

export interface IQuizApi {
  quizId: number;
  nome: string;
  descricao?: string | null;
  somenteAlunosCadastrados: boolean;
}

export interface IQuiz {
  quizId: number;
  name: string;
  description?: string | null;
  onlyStudentsLogged: boolean;
}

export interface IMovQuizApi {
  movQuizId: number;
  quizId: number;
  quiz: IQuizApi;
  codigoAcesso?: string | null;
  dataHoraInicio: string;
  dataHoraFim?: string | null;
  statusQuiz: number;
  objetoAtual?: number | null;
}

export interface IMovQuiz {
  movQuizId: number;
  quizId: number;
  quiz: IQuiz;
  accessCode?: string | null;
  dateTimeStart: string;
  dateTimeFinish?: string | null;
  statusQuiz: number;
  currentObject?: number | null;
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
