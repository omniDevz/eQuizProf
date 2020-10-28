export interface ITeacherHomeQuestionApi {
  numeroPergunta: number;
  quantidadeAcertos: number;
}

export interface ITeacherHomeApi {
  quantidadeQuizRealizados: number;
  quantidadeAlunos: number;
  ultimoQuizRealizado: ITeacherHomeQuestionApi[];
}

export interface ITeacherHomeQuestion {
  numberQuestion: number;
  quantityRights: number;
}

export interface ITeacherHome {
  quantityQuiz: number;
  quantityStudent: number;
  lastQuiz: ITeacherHomeQuestion[];
}
