import styled from 'styled-components';

export const Container = styled.article``;

export const Title = styled.h2`
  padding: 2rem 24px 8px;
  font-size: 4.6rem;
  width: 100%;
`;

export const Description = styled.p`
  padding: 0 24px;
  font-size: 1.8rem;
  width: 100%;
`;

export const Form = styled.form`
  padding: 40px 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 12px;
  flex: 1;
`;

export const TwoColumns = styled.div`
  flex-direction: row;
  column-gap: 12px;
  margin-bottom: 6.4rem;
  margin-top: 3.2rem;
`;

export const ButtonsWrapper = styled.div`
  margin-bottom: 2.4rem;

  button {
    margin: 8px auto;
  }
`;
