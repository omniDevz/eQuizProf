import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.article``;

export const Title = styled.h2`
  padding: 2rem 24px 8px;
  font-size: 4.6rem;
  width: 100%;

  @media (min-width: 768px) {
    padding-bottom: 2.4rem;
    text-align: center;
  }
`;

export const Description = styled.p`
  padding: 0 24px;
  font-size: 1.8rem;
  width: 100%;

  @media (min-width: 768px) {
    padding-bottom: 2.4rem;
    text-align: center;
  }
`;

export const Form = styled.form`
  padding: 32px 24px 0;
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;

  button {
    margin: 2rem auto 16px auto;
  }
`;

export const TwoColumns = styled.div`
  flex-direction: row;
  column-gap: 12px;
`;

export const LinkLogin = styled(Link)`
  padding: 0 24px;
  margin: 0 auto;
`;
