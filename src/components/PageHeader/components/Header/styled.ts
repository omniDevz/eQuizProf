import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  padding-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  box-shadow: var(--box-shadow);
  padding: 0.8rem;
  border-radius: 50%;
  font-size: 3.2rem;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 6rem;
  height: 6rem;
`;

export const Text = styled.h6`
  font-size: 2.4rem;
`;
