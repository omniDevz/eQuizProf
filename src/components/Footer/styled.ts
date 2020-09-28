import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  text-align: center;
  height: 4rem;
  font: normal 1.6rem 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.tertiary};
  text-shadow: var(--text-shadow);
`;
