import React from 'react';

import FormField from '../../../../../components/FormField';

import {
  RadioButtonContainer,
  RadioButtonStyled,
  FieldRadioButton,
  IconRight,
  IconError,
  Label,
} from './styled';

import { FieldRadioButtonProps } from './interface';

const FormRadioButton: React.FC<FieldRadioButtonProps> = ({
  setValue,
  value,
  text,
  name,
  check,
}) => {
  const id = `id_${name}_radio`;

  return (
    <FieldRadioButton>
      <FormField label={text} name={name} value={value} onChange={setValue} />
      <RadioButtonContainer htmlFor={id}>
        <RadioButtonStyled
          id={id}
          type="radio"
          value={check.value}
          checked={check.checked === check.value}
          name={check.name}
          onChange={check.setAlternative ? check.setAlternative : setValue}
        />
        <Label htmlFor={id}>
          <IconError />
          <IconRight />
        </Label>
      </RadioButtonContainer>
    </FieldRadioButton>
  );
};

export default FormRadioButton;
