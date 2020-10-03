export interface ClassProps {
  classId?: string;
  name: string;
  students?: number;
  quizzes?: number;
  description: string;
  code?: string;
}

export interface ClassApiProps {
  turmaId: string;
  nome: string;
  descricao: string;
  codigo: string;
}
