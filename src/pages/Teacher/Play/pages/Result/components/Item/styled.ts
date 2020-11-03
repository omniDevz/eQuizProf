import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const ItemWrapper = styled.div`
  background: ${(props) => props.theme.colors.box};
  justify-content: flex-start;
  grid-gap: 1.6rem;
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

export const Info = styled.div``;

export const Scores = styled.div`
  flex-direction: row;
  grid-gap: 2rem;
`;

export const Name = styled.label`
  flex: 1;
  width: 100%;
  font-size: 2.6rem;
`;

export const Number = styled.label`
  font-size: 3.2rem;
  margin-right: -1.2rem;
`;

export const Num = styled.label`
  font-size: 2.2rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
`;

export const DetailsResult = styled(Link)`
  display: flex;
  margin-left: auto;

  svg {
    width: 4rem;
    height: 4rem;
    transform: scale(1);
    transition: all 320ms ease-in-out;

    &:hover {
      transform: scale(.9);
    }
  }
`;
