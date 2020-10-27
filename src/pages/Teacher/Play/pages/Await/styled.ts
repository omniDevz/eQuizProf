import styled from 'styled-components';
import {  FiRefreshCw } from 'react-icons/fi';

export const AwaitWrapper = styled.div`
  padding: 3.2rem 24px;
  height: 100vh;
  width: 100%;
`;

export const Header = styled.div`
  flex-direction: row;
  justify-content: center;
  grid-gap: 2.4rem;
  width: 100%;
  margin-bottom: 2.4rem;
`;

export const SubTitle = styled.h3`
  font-size: 2.4rem;
  font-family: 'Roboto', sans-serif;

  b {
    font-size: 3.2rem;
    font-weight: 600;
  }
`;

export const Reload = styled(FiRefreshCw)`
  color: ${(props) => props.theme.colors.tertiary};
  border: 2.5px solid ${(props) => props.theme.colors.primary};
  border-radius: 3.2rem;
  padding: .6rem;
  width: 5rem;
  height: 4rem;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    border-right-width: 5px;
    border-left-width: 5px;
  }
`

export const ListStudents = styled.ul`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  padding: 2.4rem 0;
  display: flex;
  grid-gap: 1.6rem;
  flex-direction: column;
  max-height: calc(100vh - 30rem);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const WrappersButtons = styled.div`
  width: 100%;
  grid-gap: 1.6rem;
  margin-top: 3.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;
