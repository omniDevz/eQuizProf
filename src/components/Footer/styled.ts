import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  text-align: center;
  height: 4rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.tertiary};
  text-shadow: var(--text-shadow);
`;
