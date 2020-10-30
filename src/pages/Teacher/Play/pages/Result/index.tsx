import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import Item from './components/Item';

import api from '../../../../../services/api';

import {
  WrappersButtons,
  ResultWrapper,
  ListStudents,
  SubTitle,
} from './styled';

import { IResultStudentApi, IResultStudent, IResultPage } from './interface';

const Result: React.FC<IResultPage> = ({ movQuizId }) => {
  const [resultStudents, setResultStudents] = useState<IResultStudent[]>([]);

  const { addToast } = useToasts();

  function handleGetPointsStudents() {
    api
      .get(`VWClassificacaoQuizProfessor/movQuizId=${movQuizId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const resultsApi = response.data as IResultStudentApi[];

        const newResults = resultsApi.map((resultApi) => {
          const result = {
            correct: resultApi.acertou,
            error: resultApi.errou,
            nameStudent: resultApi.nomeAluno,
            points: resultApi.pontuacao,
            studentId: resultApi.alunoId,
          } as IResultStudent;

          return result;
        });

        setResultStudents(newResults);
      })
      .catch((err) => {
        console.error(err.message);
        addToast(
          'Houve algum erro inesperado ir para tela de resultados, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetPointsStudents, [addToast, movQuizId]);

  return (
    <ResultWrapper>
      <SubTitle>Resultado geral</SubTitle>
      <ListStudents>
        {resultStudents.length &&
          resultStudents.map((resultStudent, index) => (
            <Item
              key={resultStudent.studentId}
              index={index}
              student={resultStudent}
            />
          ))}
      </ListStudents>
      <WrappersButtons>
        <Button color="primary-outline">Fechar</Button>
      </WrappersButtons>
    </ResultWrapper>
  );
};

export default Result;
