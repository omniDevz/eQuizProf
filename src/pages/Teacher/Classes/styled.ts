import styled from 'styled-components';

export const Title = styled.h3`
  padding: 3.2rem 24px 0;
  font-size: 4rem;
`;

export const Description = styled.p`
  padding: 0 24px;
  font-size: 1.8rem;
`;

export const Form = styled.div`
  padding: 1.6rem 24px;
`;

export const ListClass = styled.ul`
  position: relative;
  padding: 0 24px;
  overflow-y: auto;
  max-height: 40vh;
  margin-bottom: 1.6rem;
  flex: 1;
`;

export const ItemClass = styled.li`
  border: 2.5px solid ${(props) => props.theme.colors.primary};
  border-radius: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  margin-bottom: 1.6rem;

  svg {
    width: 7.2rem;
    height: 7.2rem;
    color: ${(props) => props.theme.colors.primary};
    stroke-width: 2px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Informations = styled.div`
  align-items: flex-start;
`;

export const Name = styled.h5`
  font-size: 2.4rem;
  font-weight: 600;
`;

export const Information = styled.p`
  font-size: 1.6rem;

  b {
    font-size: 1.8rem;
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 1.6rem;
`;
