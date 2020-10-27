import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import Item from './components/Item';

import api from '../../../../../services/api';

import {
  WrappersButtons,
  AwaitWrapper,
  ListStudents,
  SubTitle,
  Header,
  Reload,
} from './styled';

import {
  IMovStudentQuizApi,
  IPlayAwaitParams,
  IMovStudentQuiz,
  IStudent,
} from './interface';

const Await: React.FC<IPlayAwaitParams> = ({ movQuizId }) => {
  const [movStudentQuiz, setMovStudentQuiz] = useState<IMovStudentQuiz>(
    {} as IMovStudentQuiz
  );

  const { addToast } = useToasts();

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

  useEffect(handleGetStudentsInQuiz, []);

  return (
    <AwaitWrapper>
      <Header>
        <SubTitle>
          <b>{movStudentQuiz.student?.length || 0}</b> alunos online
        </SubTitle>
        <Reload onClick={handleGetStudentsInQuiz} />
      </Header>
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
      <WrappersButtons>
        <Button color="primary-outline">Cancelar</Button>
        <Button color="primary">Iniciar</Button>
      </WrappersButtons>
    </AwaitWrapper>
  );
};

export default Await;
