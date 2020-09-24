import styled from 'styled-components';

export const ListAuthors = styled.ul`
  flex: 1;
  padding: 3.2rem 0;
  margin: 0 24px;
`;

export const ItemAuthor = styled.li`
  margin-bottom: 1.6rem;
  background: ${(props) => props.theme.colors.box};
  border-radius: 3.2rem;
  box-shadow: var(--box-shadow);
  transform: scale(1);
  transition: all 240ms ease-in-out;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: scale(0.96);
  }
`;

export const HeaderAuthor = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: ${(props) => props.theme.colors.primary};
    align-self: center;
  }
`;

export const Name = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.tertiary};
`;
