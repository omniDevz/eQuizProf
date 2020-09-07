import styled from 'styled-components';

import { HeaderWrapper } from '../../components/PageHeader/styled';

export const LandingPage = styled.main`
  padding: 0 2.4rem;
  width: 100%;

  ${HeaderWrapper} {
    padding: 0;
  }
`;

export const FistFold = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr 1fr;
  article > a {
    margin-top: 1.6rem;

    span {
      font-weight: 500;
    }
  }
`;

export const Article = styled.article`
  @media (min-width: 768px) {
    width: 768px;
    max-width: 768px;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  margin-top: 5rem;
  text-align: left;
  text-shadow: var(--text-shadow);

  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  width: 100%;
  margin-top: 1.6rem;
  text-shadow: var(--text-shadow);
`;

export const Section = styled.section`
  height: 45vh;
  max-height: 300px;
  justify-content: space-between;
  margin-bottom: 8rem;
`;
