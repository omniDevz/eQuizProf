import { ChangeEvent } from 'react';

export interface StepTwoProps {
  values: {
    typeFone: string;
    countryCode: string;
    ddd: string;
    number: string;
  };
  handleChange: FunctionComponentElement;
  handleStep: function(
    1 | 2 | 3 | 4 | 5,
    1 | 2 | 3 | 4 | 5
  );
}
