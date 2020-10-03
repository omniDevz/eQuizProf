import { RouteComponentProps } from 'react-router';

export interface ParamsProps {
  idClass: string;
}

export interface StudentProps {
  id: number;
  name: string;
  birthDate: string;
  email: string;
  fone: string;
}
