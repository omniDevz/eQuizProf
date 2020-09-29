import styled from 'styled-components';

export const AwaitWrapper = styled.div`
  padding: 3.2rem 24px;
  height: 100vh;
  width: 100%;
`;

export const SubTitle = styled.h3`
  font-size: 2.4rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 2.4rem;

  b {
    font-size: 3.2rem;
    font-weight: 600;
  }
`;

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
`;
