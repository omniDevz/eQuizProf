import React, { useEffect } from 'react';
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

const Home: React.FC = () => {
  const { user } = useAuth();

  const { addToast } = useToasts();

  // useEffect(() => {
  //   api
  //     .get(`/movAlunoTurma/professorId/${user?.teacherId}`)
  //     .then(({ data }) => {
  //       const classFromApi: ClassProps[] = data.map((c: ClassApiProps) => {
  //         const newClass: ClassProps = {
  //           classId: c.turmaId,
  //           name: c.nome,
  //           description: c.descricao,
  //           quizzes: 0,
  //           students: 0,
  //         };

  //         return newClass;
  //       });

  //       setListClasses(classFromApi);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [addToast]);

  useEffect(() => {
    let labelsChart = [];

    for (let i = 0; i < 10; i++) {
      labelsChart.push(`Pergunta ${i}`);
    }

    const canvas = document.getElementById(
      'studentsChart'
    ) as HTMLCanvasElement;

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: labelsChart,
        datasets: [
          {
            label: 'Média de Acertos',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

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
  }, []);

  return (
    <PageTeacher type="icon">
      <Container>
        <Content>
          <Number>0,000</Number>
          <Description>Quizzers realizados</Description>
        </Content>
        <FiCoffee />
      </Container>

      <Container>
        <Content>
          <Number>0,000</Number>
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
