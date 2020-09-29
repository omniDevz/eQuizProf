import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

export const ItemWrapper = styled.div`
  background: ${(props) => props.theme.colors.box};
  justify-content: space-between;
  box-shadow: var(--box-shadow);
  border-radius: 3.2rem;
  flex-direction: row;
  padding: 1.6rem 2.4rem;
  width: 100%;
`;

export const IconUser = styled(FiUser)`
  color: ${(props) => props.theme.colors.primary};
  height: 4.8rem;
  width: 4.8rem;
`;

export const Name = styled.label`
  font-size: 2.4rem;
`;
