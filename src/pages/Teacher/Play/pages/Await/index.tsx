import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import Chat from '../../../../../components/Chat';
import Item from './components/Item';

import api from '../../../../../services/api';

import {
  WrappersButtons,
  AwaitWrapper,
  ListStudents,
  ChatWrapper,
  SubTitle,
  Header,
  Reload,
  Code,
} from './styled';

import {
  IMovStudentQuizApi,
  IPlayAwaitParams,
  IMovStudentQuiz,
  IStudent,
} from './interface';

const Await: React.FC<IPlayAwaitParams> = ({
  quiz,
  movQuizId,
  setCurrentObject,
  setStatusQuiz,
}) => {
  const [movStudentQuiz, setMovStudentQuiz] = useState<IMovStudentQuiz>(
    {} as IMovStudentQuiz
  );

  const { addToast } = useToasts();
  const history = useHistory();

  function handleGetStudentsInQuiz() {
    api
      .get(`movQuizAluno/${movQuizId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'error',
            autoDismiss: true,
          });
          return;
        }

        const movQuizStudentApi = response.data as IMovStudentQuizApi;

        const students = movQuizStudentApi.alunos.map((student) => {
          const newStudent = {
            person: {
              firstName: student.pessoa.nome,
              lastName: student.pessoa.sobrenome,
              personId: student.pessoa.pessoaId,
            },
            personId: student.pessoa.pessoaId,
            studentId: student.alunoId,
          } as IStudent;

          return newStudent;
        });

        const newQuizStudent = {
          movQuizId: movQuizStudentApi.movQuizId,
          student: students,
          movQuiz: {
            statusQuiz: movQuizStudentApi.movQuiz.statusQuiz,
            codeAccess: movQuizStudentApi.movQuiz.codigoAcesso,
          },
        } as IMovStudentQuiz;

        setMovStudentQuiz(newQuizStudent);
      })
      .catch((err) => {
        console.error(err);
        addToast(
          'Houve algum erro inesperado ao obter alunos no quiz, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetStudentsInQuiz, [movQuizId, addToast]);

  function handleCancelQuiz() {
    api
      .delete(`movQuiz/${movQuizId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Quiz finalizado com sucesso', {
          appearance: 'info',
          autoDismiss: true,
        });

        history.push('/quiz');
      })
      .catch((err) => {
        console.error(err);
        addToast(
          'Houve algum erro inesperado ao cancelar o quiz, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleStartQuiz() {
    api
      .put(`movQuiz/PersistirQuiz`, {
        movQuizId,
        objetoAtual: 1,
        statusQuiz: 1,
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        setStatusQuiz(1);
        setCurrentObject(1);
      })
      .catch((err) => {
        console.error(err.message);
        addToast(
          'Houve algum erro inesperado ao iniciar o quiz, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  return (
    <AwaitWrapper>
      <Header>
        <SubTitle>
          <b>{movStudentQuiz.student?.length || 0}</b> alunos online
        </SubTitle>

        <Reload onClick={handleGetStudentsInQuiz} />
      </Header>
      {movStudentQuiz.movQuiz?.codeAccess && (
        <Code title="Código de acesso">
          <b>#{movStudentQuiz.movQuiz.codeAccess}</b>
        </Code>
      )}
      <ListStudents>
        {movStudentQuiz.student &&
          movStudentQuiz.student.map(({ person, personId }) => {
            return (
              <Item
                key={personId}
                name={`${person.firstName} ${person.lastName}`}
              />
            );
          })}
      </ListStudents>
      {!!quiz.onlyStudentsLogged && (
        <ChatWrapper>
          <Chat movQuizId={movQuizId} />
        </ChatWrapper>
      )}
      <WrappersButtons>
        <Button color="primary-outline" onClick={handleCancelQuiz}>
          Cancelar
        </Button>
        <Button color="primary" onClick={handleStartQuiz}>
          Iniciar
        </Button>
      </WrappersButtons>
    </AwaitWrapper>
  );
};

export default Await;
