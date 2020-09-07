import { ChangeEvent } from 'react';

export interface StepFiveProps {
  handleConfirmRegister: function();
  handleStep: function(
    1 | 2 | 3 | 4 | 5,
    1 | 2 | 3 | 4 | 5
  );
}
