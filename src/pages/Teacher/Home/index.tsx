import React, { useEffect } from 'react';
import { FiCoffee, FiUsers } from 'react-icons/fi';
import Chart from 'chart.js';

import PageDefault from '../../../components/PageDefault';

import {
  Container,
  Content,
  Number,
  Description,
  ContainerRow,
  SubTitle,
  Graph,
} from './styled';

function Home() {
  useEffect(() => {
    let labelsChart = [];

    for (let i = 0; i < 10; i++) {
      labelsChart.push(`Pergunta ${i}`);
    }

    const canvas = document.getElementById(
      'studantsChart'
    ) as HTMLCanvasElement;

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: labelsChart,
        datasets: [
          {
            label: 'Média de Acertos',
            data: [6, 7, 2, 3, 5, 2, 8, 4, 2, 5],

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
    <PageDefault>
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
          <Description>Alunos cadastrados</Description>
        </Content>
        <FiUsers />
      </Container>

      <ContainerRow>
        <SubTitle>Último quiz realizado</SubTitle>
        <Graph id="studantsChart"></Graph>
      </ContainerRow>
    </PageDefault>
  );
}

export default Home;
