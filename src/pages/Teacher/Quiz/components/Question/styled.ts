import styled from 'styled-components';

import logoSVG from '../../../../../assets/images/icons/iconTime.svg';

export const QuestionWrapper = styled.div`
  background: ${(props) => props.theme.colors.box};
  box-shadow: var(--box-shadow);
  border-radius: 3.2rem;
  margin: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    'number timer'
    'question question'
    'response response'
    '- actions';
  justify-content: center;
  grid-gap: 0.8rem;
  padding: 1.6rem 2.4rem;
`;

export const TextHeader = styled.p`
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

export const Number = styled(TextHeader)`
  grid-area: number;
  text-align: left;
`;

export const Timer = styled(TextHeader)`
  grid-area: timer;
  padding: 1rem;
  padding-right: 1.12rem;
  padding-bottom: 0.8rem;
  text-align: right;
  background: url(${logoSVG});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;
`;

export const QuestionText = styled(TextHeader)`
  grid-area: question;
  font-size: 2.4rem;
`;

export const ResponseWrapper = styled.div`
  grid-area: response;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.8rem;
`;

export const Response = styled.p`
  background: ${(props) => props.theme.colors.box};
  box-shadow: var(--box-shadow);
  border-radius: 3.2rem;
  text-align: center;
  padding: 0.8rem;
`;
