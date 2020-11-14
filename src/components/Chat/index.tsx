import React, { useEffect, useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import { useAuth } from '../../contexts/auth';
import api from '../../services/api';

import {
  ContainerMessage,
  ContainerIcon,
  ContainerChat,
  QuizMessage,
  NameStudent,
  Close,
} from './styled';

import { IChatComponent, IChatMessageApi, IChatMessage } from './interface';

const Chat: React.FC<IChatComponent> = ({ movQuizId }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [listMessage, setListMessage] = useState<IChatMessage[]>([]);

  const { user } = useAuth();
  const { addToast } = useToasts();

  function handleChatOpen() {
    setChatOpen(!chatOpen);
  }

  function handleGetMessageByMovQuiz() {
    if (movQuizId === 0) return;

    api
      .get(`movQuizChat/quiz/${movQuizId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const messagesApi = response.data as IChatMessageApi[];

        const messages = messagesApi.map((messageApi) => {
          return {
            message: messageApi.mensagem,
            studentId: messageApi.alunoId,
            movQuizChatId: messageApi.movQuizChatId,
            nameStudent: `${messageApi.aluno.pessoa.nome} ${messageApi.aluno.pessoa.sobrenome}`,
          } as IChatMessage;
        });

        setListMessage(messages);
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve um erro inesperado ao obter as mensagens do chat, tendo novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleIntervalGetMessageByMovQuiz() {
    let intervalGetMessageQuiz = setInterval(handleGetMessageByMovQuiz, 3500);
    return () => clearInterval(intervalGetMessageQuiz);
  }

  useEffect(handleIntervalGetMessageByMovQuiz, [
    movQuizId,
    handleGetMessageByMovQuiz,
  ]);

  useEffect(handleGetMessageByMovQuiz, [movQuizId, user]);

  if (!user) return <> </>;

  return (
    <>
      <ContainerChat chatOpen={chatOpen}>
        <Close onClick={handleChatOpen} />
        <ContainerMessage>
          {!!listMessage.length &&
            listMessage.map((m) => (
              <QuizMessage key={m.movQuizChatId}>
                <NameStudent>{m.nameStudent}</NameStudent>
                {m.message}
              </QuizMessage>
            ))}
        </ContainerMessage>
      </ContainerChat>
      <ContainerIcon onClick={handleChatOpen}>
        <FiMessageCircle size="4.8rem" />
      </ContainerIcon>
    </>
  );
};

export default Chat;
