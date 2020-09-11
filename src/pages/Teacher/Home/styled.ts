import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.box};
  border-radius: 3.2rem;
  padding: 2.4rem;
  margin: 3.2rem 24px 0;
  flex-direction: row;
  justify-content: space-between;

  svg {
    text-shadow: var(--text-shadow);
    color: ${({ theme }) => theme.colors.primary};
    width: 6.4rem;
    height: 6.4rem;
  }
`;

export const Content = styled.div`
  align-items: flex-start;
`;

export const Number = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  text-shadow: var(--text-shadow);
`;

export const Description = styled.p`
  display: flex;
  column-gap: 0.8rem;
  align-items: center;
`;

export const ContainerRow = styled(Container)`
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.8rem;
  margin-bottom: 2rem;
  padding: 2.4rem 1.2rem;
`;

export const SubTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  text-shadow: var(--text-shadow);
  padding: 0 1.2rem;
`;

export const Graph = styled.canvas``;
