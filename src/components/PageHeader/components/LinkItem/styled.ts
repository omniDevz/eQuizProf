import styled from 'styled-components';

export const Circle = styled.div`
  position: absolute;
  right: -1rem;
  top: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-left: 0.8rem;
  padding-right: 1.7rem;
  border-radius: 32px;
  background: ${(props) => props.theme.colors.primary};
  transform: translateX(88%);
  transition: all 260ms ease-in-out;

  svg {
    height: 32px;
    width: 32px;
    border: 3px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
    border-radius: 32px;
    stroke-width: 2.6;
  }
`;

export const LinkItemContainer = styled.li`
  border: 2.5px solid ${(props) => props.theme.colors.primary};
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-weight: 500;
  box-shadow: var(--box-shadow);
  text-shadow: var(--text-shadow);
  margin-top: 2.4rem;

  &:first-child {
    margin-top: 0;
  }

  a {
    font-size: 2.4rem;
    height: 4.6rem;
    padding: 8px 24px;
    border-radius: 32px;
    flex: 1;
    position: relative;
    transition: all 260ms ease-in-out;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus-within,
    &:hover {
      font-size: 1.8rem;
      padding-right: 7.7rem;

      ${Circle} {
        transform: translateX(0);
      }
    }
  }
`;
