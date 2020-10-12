import styled from 'styled-components';
import { CheckButtonWrapper } from '../../../components/CheckButton/styled';

export const Form = styled.form`
  margin: 3.2rem 24px;
`;

export const ListBooks = styled.ul`
  flex: 1;
  padding: 3.2rem 24px;
  max-height: calc(100vh - 32rem);
  overflow-y: auto;
  margin-bottom: 2.4rem;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemBook = styled.li`
  margin-bottom: 1.6rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 3.2rem;
  box-shadow: var(--box-shadow);

  &:last-child {
    margin-bottom: 0;
  }

  ${CheckButtonWrapper} {
    justify-content: flex-end;
  }
`;

export const HeaderBook = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.tertiaryOpacity64};
  font-size: 1.64rem;
  margin: 0.8rem 0;
  width: 100%;
`;

export const FooterBook = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1.6rem;
  padding-bottom: 1.6rem;

  ${Description} {
    margin: 0;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.div`
  flex-direction: row;
  column-gap: 1.2rem;

  a {
    display: flex;

    svg {
      height: 3.2rem;
      width: 3.2rem;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 2.4rem;
`;
