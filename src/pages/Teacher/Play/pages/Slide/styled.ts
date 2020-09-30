import styled from 'styled-components';
import { FiX, FiCheck } from 'react-icons/fi';

import logoSVG from '../../../../../assets/images/icons/iconTime.svg';

import { ButtonsProps } from './interface';

export const SlideWrapper = styled.div`
  padding: 2.4rem 24px 4rem;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  flex: 1;
`;

export const Header = styled.div`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Number = styled.p`
  font-size: 3.2rem;
`;

export const Timer = styled.p`
  font-size: 3.2rem;
  background: url(${logoSVG});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2.4rem 1.6rem 2rem;
`;

export const SlideStyles = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 2.4rem;
  text-shadow: var(--text-shadow);
  padding-bottom: 6.4rem;
`;

export const ButtonAction = styled.div`
  width: 100%;
`;
