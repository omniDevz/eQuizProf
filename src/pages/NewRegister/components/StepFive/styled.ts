import styled from 'styled-components';

export const Container = styled.article`
  justify-content: space-between;
  flex: 1;
  padding: 0 24px;
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h2`
  padding: 2rem 0 8px;
  font-size: 4.6rem;
  width: 100%;
`;

export const Description = styled.p`
  padding: 0;
  font-size: 1.8rem;
  width: 100%;
`;

export const Term = styled.p`
  font-size: 1.2rem;
  text-align: justify;
`;

export const ButtonsWrapper = styled.div`
  margin-bottom: 2.4rem;
  width: 100%;

  button {
    margin: 8px auto;
  }
`;
