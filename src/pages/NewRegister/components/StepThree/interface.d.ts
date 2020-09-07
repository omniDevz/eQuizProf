import { ChangeEvent } from 'react';

export interface StepThreeProps {
  values: {
    cep: string;
    country: string;
    state: string;
    city: string;
    neighborhood: string;
    address: string;
    numberAddress: string;
  };
  handleChange: FunctionComponentElement;
  handleStep: function(
    1 | 2 | 3 | 4 | 5,
    1 | 2 | 3 | 4 | 5
  );
}
