import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../../components/Button';
import FormField from '../../../../../../components/FormField';
import PageTeacher from '../../../../../../components/PageTeacher';
import RadioButton from '../../../../../../components/RadioButton';
import FieldRadioButton from '../../../components/FieldRadioButton';

import api from '../../../../../../services/api';

import { Form, ButtonsWrapper } from './styled';

import {
  IQuizUpdateQuestionParams,
  IAlternativeQuizApi,
  IQuestionQuizApi,
} from './interface';

const QuestionUpdate: React.FC = () => {
  const [level, setLevel] = useState('1');
  const [question, setQuestion] = useState('');
  const [alternativeA, setAlternativeA] = useState('');
  const [alternativeB, setAlternativeB] = useState('');
  const [alternativeC, setAlternativeC] = useState('');
  const [alternativeD, setAlternativeD] = useState('');
  const [timeInSeconds, setTimeInSeconds] = useState('');
  const [orderByQuestion, setOrderByQuestion] = useState('');
  const [orderByObject, setOrderByObject] = useState('');
  const [alternativeRight, setAlternativeRight] = useState('A');
  const [alternativesApi, setAlternativesApi] = useState<IAlternativeQuizApi[]>(
    []
  );

  const { addToast } = useToasts();
  const { quizId, questionId } = useParams<IQuizUpdateQuestionParams>();
  const history = useHistory();

  function handleGetTextAlternative(
    charAlternative: string,
    alternative: string
  ) {
    switch (charAlternative) {
      case 'A':
        setAlternativeA(alternative);
      case 'B':
        setAlternativeB(alternative);
      case 'C':
        setAlternativeC(alternative);
      case 'D':
        setAlternativeD(alternative);
    }
  }

  useEffect(() => {
    api
      .get(`perguntaQuiz/${questionId}`)
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const questionApi = data as IQuestionQuizApi;

        setLevel(String(questionApi.pesoPergunta));
        setQuestion(questionApi.enunciado);
        setTimeInSeconds(String(questionApi.tempoSegundos));
        setOrderByQuestion(String(questionApi.numeroPergunta));
        setOrderByObject(String(questionApi.ordenacaoObjetoQuiz));
        setAlternativesApi(questionApi.alternativas);
        setAlternativeRight(questionApi.alternativaCorreta);

        questionApi.alternativas.forEach((alternative) =>
          handleGetTextAlternative(
            alternative.letraAlternativa,
            alternative.enunciado
          )
        );
      })
      .catch((err) => {
        console.error(err);
        addToast(
          'Houve algum erro inesperado na busca desta pergunta, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [addToast, quizId, questionId]);

  function handleChangeTextAlternative(
    charAlternative: string,
    alternativeDefault: string
  ) {
    switch (charAlternative) {
      case 'A':
        return alternativeA;
      case 'B':
        return alternativeB;
      case 'C':
        return alternativeC;
      case 'D':
        return alternativeD;

      default:
        return alternativeDefault;
    }
  }

  function handleSubmitUpdateQuestionInQuiz() {
    const newAlternativesQuiz: IAlternativeQuizApi[] = alternativesApi.map(
      (alternative: IAlternativeQuizApi) => {
        return {
          alternativaQuizId: alternative.alternativaQuizId,
          perguntaQuizId: alternative.perguntaQuizId,
          enunciado: handleChangeTextAlternative(
            alternative.letraAlternativa,
            alternative.enunciado
          ),
          letraAlternativa: alternative.letraAlternativa,
        };
      }
    );

    api
      .put('perguntaQuiz', {
        quizId,
        perguntaQuizId: questionId,
        numeroPergunta: orderByQuestion,
        enunciado: question,
        alternativaCorreta: alternativeRight,
        tempoSegundos: timeInSeconds,
        ordenacaoObjetoQuiz: orderByObject,
        pesoPergunta: level,
        alternativas: newAlternativesQuiz,
      })
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Pergunta alterada com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push(`/quiz/${quizId}`);
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  function handleDeleteQuestion() {
    api
      .delete(`perguntaQuiz/${questionId}`)
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Pergunta removida com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });

        history.push(`/quiz/${quizId}`);
      })
      .catch((err) => {
        console.error(err);
        addToast(
          'Houve algum erro inesperado na remoção, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  return (
    <PageTeacher type="back" text="Alterar pergunta">
      <Form>
        <FormField
          label="Pergunta"
          name="question"
          value={question}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuestion(e.target.value)
          }
        />
        <FieldRadioButton
          text="Alternativa A"
          name="alternativeA"
          value={alternativeA}
          setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAlternativeA(e.target.value)
          }
          check={{
            name: 'alternativeRight',
            value: 'A',
            checked: alternativeRight,
            setAlternative: (e: React.ChangeEvent<HTMLInputElement>) => {
              setAlternativeRight(e.target.value);
            },
          }}
        />
        <FieldRadioButton
          text="Alternativa B"
          name="alternativeB"
          value={alternativeB}
          setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAlternativeB(e.target.value)
          }
          check={{
            name: 'alternativeRight',
            value: 'B',
            checked: alternativeRight,
            setAlternative: (e: React.ChangeEvent<HTMLInputElement>) =>
              setAlternativeRight(e.target.value),
          }}
        />
        <FieldRadioButton
          text="Alternativa C"
          name="alternativeC"
          value={alternativeC}
          setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAlternativeC(e.target.value)
          }
          check={{
            name: 'alternativeRight',
            value: 'C',
            checked: alternativeRight,
            setAlternative: (e: React.ChangeEvent<HTMLInputElement>) =>
              setAlternativeRight(e.target.value),
          }}
        />
        <FieldRadioButton
          text="Alternativa D"
          name="alternativeD"
          value={alternativeD}
          setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAlternativeD(e.target.value)
          }
          check={{
            name: 'alternativeRight',
            value: 'D',
            checked: alternativeRight,
            setAlternative: (e: React.ChangeEvent<HTMLInputElement>) =>
              setAlternativeRight(e.target.value),
          }}
        />
        <FormField
          label="Tempo em segundos"
          name="timeInSeconds"
          value={timeInSeconds}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTimeInSeconds(e.target.value)
          }
          type="number"
        />
        <FormField
          label="Ordem da pergunta"
          name="orderByQuestion"
          value={orderByQuestion}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setOrderByQuestion(e.target.value)
          }
          type="number"
        />
        <RadioButton
          options={[
            {
              label: 'Nível 1',
              value: '1',
            },
            {
              label: 'Nível 2',
              value: '2',
            },
            {
              label: 'Nível 3',
              value: '3',
            },
          ]}
          name="level"
          value={level}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLevel(e.target.value)
          }
        />
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleDeleteQuestion}>
          Excluir
        </Button>
        <Button color="primary" onClick={handleSubmitUpdateQuestionInQuiz}>
          Salvar
        </Button>
      </ButtonsWrapper>
    </PageTeacher>
  );
};

export default QuestionUpdate;
