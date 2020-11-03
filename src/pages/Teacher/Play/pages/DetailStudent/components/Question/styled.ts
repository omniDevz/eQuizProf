import styled from 'styled-components';
import { FiCheck, FiTrendingUp, FiX } from 'react-icons/fi';

export const QuestionWrapper = styled.div`
  width: 100%;
  padding: 1.6rem;
  grid-gap: 1.2rem;
  border-radius: 3.2rem;
  box-shadow: var(--box-shadow);
  background: ${(props) => props.theme.colors.box};
`;

export const Header = styled.div`
  justify-content: space-between;
  flex-direction: row;
  padding: 0 1.2rem;
  grid-gap: 1.6rem;
  width: 100%;
`;

export const Number = styled.label`
  font-size: 3.2rem;
  font-weight: 600;
`;

export const InfoWrapper = styled.div`
  padding: 0.4rem 0.8rem;
  grid-gap: 0.8rem;
  font-size: 1.8rem;
  flex-direction: row;
  border-radius: 3.2rem;
  box-shadow: var(--box-shadow);
  background: ${(props) => props.theme.colors.box};
`;

export const IconUpScore = styled(FiTrendingUp)`
  height: 3.2rem;
  padding: 0.6rem;
  width: 3.2rem;
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.primary};
  border-radius: 3.2rem;
  stroke-width: 2.5px;
  box-shadow: var(--box-shadow);
`;

export const QuestionText = styled.p`
  font-size: 1.2rem;
  text-align: justify;
`;

export const ResponseWrapper = styled.div`
  width: 100%;
  padding: 1.2rem;
  display: grid;
  grid-template-columns: 1fr 3.2rem;
  align-items: flex-start;
  grid-gap: 0.8rem;
  flex-direction: row;
  border-radius: 3.2rem;
  box-shadow: var(--box-shadow);
  background: ${(props) => props.theme.colors.box};
`;

export const ResponseText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 4rem;
  height: 100%;
`;

export const IconErrorResponse = styled(FiX)`
  height: 3.2rem;
  width: 3.2rem;
  padding: 0.4rem;
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.primary};
  border-radius: 3.2rem;
  stroke-width: 2.5px;
  box-shadow: var(--box-shadow);
`;

export const IconRightResponse = styled(FiCheck)`
  height: 3.2rem;
  width: 3.2rem;
  padding: 0.4rem;
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.primary};
  border-radius: 3.2rem;
  stroke-width: 2.5px;
  box-shadow: var(--box-shadow);
`;
