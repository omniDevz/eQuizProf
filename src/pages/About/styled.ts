import styled from 'styled-components';

import { CollapseWrapper } from '../../components/Collapse/styled';

export const Container = styled.div`
  padding: 0 24px;
`;

export const Title = styled.h2`
  padding: 2rem 0 2.4rem;
  font-size: 4.6rem;
  width: 100%;
`;

export const CollapsesWrapper = styled.div`
  padding-top: 1.6rem;

  ${CollapseWrapper} {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Description = styled.p`
  padding-top: 8px;
  font-size: 1.8rem;
  width: 100%;
`;
