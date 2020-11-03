import styled from 'styled-components';

export const ResultWrapper = styled.div`
  padding: 3.2rem 24px;
  height: 100vh;
  width: 100%;
`;

export const ResultsWrapper = styled.div`
  margin: 0 24px;
  flex-direction: row;
`;

export const Info = styled.div`
  width: 100%;
`;

export const SubTitle = styled.p`
  margin-top: 4rem;
  margin-bottom: 0.8rem;
  font-size: 2.4rem;
  width: 100%;
`;

export const Value = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  width: 100%;
  color: ${(props) => props.theme.colors.primary};
`;

export const AverageClass = styled.div`
  padding: 3.2rem 24px;
`;

export const HistoryQuestions = styled.div`
  padding: 3.2rem 24px;
`;
export const Graph = styled.canvas``;
