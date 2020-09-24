import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  color: 'primary' | 'primary-outline';
  onClick?: function();
  to?: string;
  title?: string;
}
