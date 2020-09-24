import styled from 'styled-components';

export const Stream = styled.div`
  margin: 2.4rem 24px;
  border-radius: 4rem;
  box-shadow: var(--box-shadow);
  flex: 1;
  border: 2.5px solid ${(props) => props.theme.colors.primary};
  max-height: 70vh;

  img {
    border-radius: 3.6rem;
    max-width: 100%;
    max-height: calc(70vh - 5px);
    height: auto;
    width: 100%;
    object-fit: cover;
    flex: 1;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 0 24px 3.2rem;
`;
