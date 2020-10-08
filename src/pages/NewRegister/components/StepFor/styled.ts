import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
`;

export const Title = styled.h2`
  padding: 2rem 24px 0.8rem;
  font-size: 4.6rem;
  width: 100%;
`;

export const Description = styled.p`
  padding: 0 24px;
  font-size: 1.8rem;
  width: 100%;
`;

export const Form = styled.form`
  padding: 4rem 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1.2rem;
  flex: 1;
  width: 100%;
`;

export const Fields = styled.div`
  grid-gap: 1.6rem;
  margin-bottom: 6.4rem;
  margin-top: 3.2rem;
`;

export const ButtonsWrapper = styled.div`
  margin-bottom: 2.4rem;
  width: 100%;

  button {
    margin: 8px auto;
  }
`;
