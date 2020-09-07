import { ChangeEvent } from 'react';

export interface StepOneProps {
  values: {
    firstName: string;
    lastName: string;
    cpf: string,
    dateOfBirth: string;
    genre: string;
    email: string;
  };
  handleChange: FunctionComponentElement;
  handleStep: function(
    1 | 2 | 3 | 4 | 5,
    1 | 2 | 3 | 4 | 5
  );
}
