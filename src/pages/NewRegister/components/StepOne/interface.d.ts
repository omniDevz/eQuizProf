import { ChangeEvent } from 'react';

export interface StepOneProps {
  values: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    genre: string;
    email: string;
  };
  cpf: string,

  handleChange: FunctionComponentElement;
  handleStep: function(
    1 | 2 | 3 | 4 | 5,
    1 | 2 | 3 | 4 | 5
  );
  setValues: {
    setCpf: React.Dispatch<React.SetStateAction<string>>;
  }
}
