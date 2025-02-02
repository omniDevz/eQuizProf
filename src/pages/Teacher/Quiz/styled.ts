import styled from 'styled-components';

export const Form = styled.form`
  margin: 3.2rem 24px;
`;

export const ListQuizzes = styled.ul`
  margin: 0 24px 3.2rem;
  max-height: calc(100vh - 35rem);
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 2.4rem;
`;
