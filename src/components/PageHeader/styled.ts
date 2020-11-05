import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 0 24px;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 2vw;
  bottom: 0;
  z-index: 100000000;
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 24px;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 0 4rem 4rem 0;
  border-right: 3px solid ${(props) => props.theme.colors.primary};
  box-shadow: var(--box-shadow);

  transform: translateX(-100%);
  transition: all 260ms ease-in-out;

  &.open {
    transform: translateX(0%);
  }
`;

export const Navigation = styled.nav`
  flex: 1;
  width: 100%;
  padding-top: 5.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkList = styled.ul`
  flex-direction: column;
`;
