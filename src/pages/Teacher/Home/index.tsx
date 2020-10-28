import React, { useEffect, useState } from 'react';
import { FiCoffee, FiUsers } from 'react-icons/fi';
import Chart from 'chart.js';

import PageTeacher from '../../../components/PageTeacher';

import api from '../../../services/api';
import { useAuth } from '../../../contexts/auth';
import { useToasts } from 'react-toast-notifications';

import {
  Container,
  Content,
  Number,
  Description,
  ContainerRow,
  SubTitle,
  Graph,
} from './styled';

import {
  ITeacherHomeQuestion,
  ITeacherHomeApi,
  ITeacherHome,
} from './interface';

const Home: React.FC = () => {
  const [dash, setDash] = useState<ITeacherHome>({} as ITeacherHome);

  const { user } = useAuth();
  const { addToast } = useToasts();

  useEffect(() => {
    api
      .get(`professor/home/${user?.teacherId}`)
      .then((response) => {
        const dashApi = response.data as ITeacherHomeApi;

        const lastQuiz = dashApi.ultimoQuizRealizado.map((questionApi) => {
          const question = {
            numberQuestion: questionApi.numeroPergunta,
            quantityRights: questionApi.quantidadeAcertos,
          } as ITeacherHomeQuestion;

          return question;
        });

        const newDash = {
          quantityQuiz: dashApi.quantidadeQuizRealizados,
          quantityStudent: dashApi.quantidadeAlunos,
          lastQuiz,
        } as ITeacherHome;

        setDash(newDash);
      })
      .catch((err) => {
        console.error(err.message);
        addToast(
          'Houve algum erro inesperado ao obter dados da página inicial, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [user, addToast]);

  useEffect(() => {
    if (!dash?.lastQuiz) return;

    let labelsChart = dash?.lastQuiz.map((q) => `Pergunta ${q.numberQuestion}`);

    const canvas = document.getElementById(
      'studentsChart'
    ) as HTMLCanvasElement;

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: labelsChart,
        datasets: [
          {
            label: 'Total de acertos',
            data: dash?.lastQuiz.map((q) => q.quantityRights),

            pointBackgroundColor: '#E01916',
            backgroundColor: 'rgba(242, 49, 49, .24)',
            borderColor: '#E01916',
            borderWidth: 1,
            showLine: true,
          },
        ],
      },
      options: {
        legend: {
          align: 'start',
          labels: {
            fontColor: '#FFF',
            padding: 24,
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                color: 'rgba(242, 49, 49, .24)',
              },
            },
          ],
        },
      },
    });
  }, [dash, addToast]);

  return (
    <PageTeacher type="icon">
      <Container>
        <Content>
          <Number>{dash?.quantityQuiz || 0}</Number>
          <Description>Quizzers realizados</Description>
        </Content>
        <FiCoffee />
      </Container>

      <Container>
        <Content>
          <Number>{dash?.quantityStudent || 0}</Number>
          <Description>Alunos nas turmas</Description>
        </Content>
        <FiUsers />
      </Container>

      <ContainerRow>
        <SubTitle>Último quiz realizado</SubTitle>
        <Graph id="studentsChart"></Graph>
      </ContainerRow>
    </PageTeacher>
  );
};

export default Home;
