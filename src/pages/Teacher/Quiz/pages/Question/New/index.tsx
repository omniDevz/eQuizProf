import React from 'react';

import Button from '../../../../../../components/Button';
import FormField from '../../../../../../components/FormField';
import PageTeacher from '../../../../../../components/PageTeacher';
import RadioButton from '../../../../../../components/RadioButton';
import FieldRadioButton from '../../../components/FieldRadioButton';

import useForm from '../../../../../../hooks/useForm';

import { Form, ButtonWrapper } from './styled';
import { useHistory, useParams } from 'react-router';
import { IQuizNewQuestionParams } from './interface';
import api from '../../../../../../services/api';
import { useToasts } from 'react-toast-notifications';

const QuestionNew: React.FC = () => {
  const valuesInitials = {
    level: '1',
    question: '',
    alternativeA: '',
    alternativeB: '',
    alternativeC: '',
    alternativeD: '',
    timeInSeconds: '',
    orderByQuestion: '',
    alternativeRight: 'A',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const { addToast } = useToasts();
  const history = useHistory();

  const { quizId } = useParams<IQuizNewQuestionParams>();

  function handleSubmitNewQuestionInQuiz() {
    api
      .post('perguntaQuiz', {
        quizId,
        numeroPergunta: values.orderByQuestion,
        enunciado: values.question,
        alternativaCorreta: values.alternativeRight,
        tempoSegundos: values.timeInSeconds,
        pesoPergunta: values.level,
        alternativas: [
          {
            letraAlternativa: 'A',
            enunciado: values.alternativeA,
          },
          {
            letraAlternativa: 'B',
            enunciado: values.alternativeB,
          },
          {
            letraAlternativa: 'C',
            enunciado: values.alternativeC,
          },
          {
            letraAlternativa: 'D',
            enunciado: values.alternativeD,
          },
        ],
      })
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Pergunta cadastrada com sucesso', {
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

  return (
    <PageTeacher type="back" text="Nova pergunta">
      <Form>
        <FormField
          label="Pergunta"
          name="question"
          value={values.question}
          onChange={handleChange}
        />
        <FieldRadioButton
          text="Alternativa A"
          name="alternativeA"
          value={values.alternativeA}
          setValue={handleChange}
          check={{
            name: 'alternativeRight',
            value: 'A',
            checked: values.alternativeRight,
          }}
        />
        <FieldRadioButton
          text="Alternativa B"
          name="alternativeB"
          value={values.alternativeB}
          setValue={handleChange}
          check={{
            name: 'alternativeRight',
            value: 'B',
            checked: values.alternativeRight,
          }}
        />
        <FieldRadioButton
          text="Alternativa C"
          name="alternativeC"
          value={values.alternativeC}
          setValue={handleChange}
          check={{
            name: 'alternativeRight',
            value: 'C',
            checked: values.alternativeRight,
          }}
        />
        <FieldRadioButton
          text="Alternativa D"
          name="alternativeD"
          value={values.alternativeD}
          setValue={handleChange}
          check={{
            name: 'alternativeRight',
            value: 'D',
            checked: values.alternativeRight,
          }}
        />
        <FormField
          label="Tempo em segundos"
          name="timeInSeconds"
          value={values.timeInSeconds}
          onChange={handleChange}
          type="number"
        />
        <FormField
          label="Ordem da pergunta"
          name="orderByQuestion"
          value={values.orderByQuestion}
          onChange={handleChange}
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
          value={values.level}
          onChange={handleChange}
        />
      </Form>
      <ButtonWrapper>
        <Button color="primary" onClick={handleSubmitNewQuestionInQuiz}>
          Salvar
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default QuestionNew;
