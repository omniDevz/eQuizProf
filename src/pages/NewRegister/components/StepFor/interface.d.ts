import { ChangeEvent } from 'react';

export interface StepForProps {
  values: {
    username: string;
    password: string;
  };
  handleChange: FunctionComponentElement;
  handleStep: function(
    1 | 2 | 3 | 4 | 5,
    1 | 2 | 3 | 4 | 5
  );
}
