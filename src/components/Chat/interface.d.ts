export interface IChatComponent {
  movQuizId: number;
}

export interface ChatProps {
  chatOpen: boolean;
}


export interface IChatMessageApi {
  movQuizChatId: number;
  movQuizId: number;
  alunoId: number;
  mensagem: string;
}

export interface IChatMessage {
  movQuizChatId: number;
  movQuizId?: number;
  studentId?: number;
  message: string;
}

