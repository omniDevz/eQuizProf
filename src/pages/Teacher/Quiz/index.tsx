import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageTeacher from '../../../components/PageTeacher';
import { useAuth } from '../../../contexts/auth';
import useForm from '../../../hooks/useForm';
import api from '../../../services/api';
import util from '../../../utils/util';
import Item from './components/Item';
import { IQuiz, IQuizApi } from './interface';

import { Form, ListQuizzes, ButtonWrapper } from './styled';

const Quiz: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const [listQuizzers, setListQuizzers] = useState<IQuiz[]>([]);

  const { user } = useAuth();
  const { addToast } = useToasts();

  useEffect(() => {
    api
      .get(`/quiz/professorId/${user?.teacherId}`)
      .then(({ data }) => {
        const quizzersFromApi: IQuiz[] = data.map((quizApi: IQuizApi) => {
          const newQuiz = {
            quizId: quizApi.quizId,
            name: quizApi.nome,
            description: quizApi.descricao,
          } as IQuiz;

          return newQuiz;
        });

        setListQuizzers(quizzersFromApi);
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }, [user, addToast]);

  const { handleChange, values } = useForm(valuesInitials);

  function handleFilterQuizzers(quiz: IQuiz): boolean {
    if (listQuizzers.length <= 0 || values.search === '') return true;

    return util.includesToArray([quiz.name, quiz.description], values.search);
  }

  return (
    <PageTeacher type="back" text="Quizzes">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
        >
          <FiSearch />
        </FormField>
      </Form>
      <ListQuizzes>
        {listQuizzers
          .filter((quiz) => handleFilterQuizzers(quiz))
          .map((quiz) => (
            <Item
              key={quiz.quizId}
              quizId={quiz.quizId}
              name={quiz.name}
              description={quiz.description}
            />
          ))}
      </ListQuizzes>
      <ButtonWrapper>
        <Button color="primary-outline" to="/quiz/new" title="Cadastrar quiz">
          Cadastrar quiz
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default Quiz;
