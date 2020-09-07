import React from 'react';

import { FormFieldProps } from './interface';
import { FormFieldWrapper, Label, Input, Text, ButtonCircle } from './styled';

const FormField: React.FC<FormFieldProps> = ({
  children,
  value,
  name,
  label,
  onChange,
  onClick,
  type,
  stroke,
}) => {
  const fieldId = `id_${name}`;
  const hasValue = value !== '';
  const hasLabel = Boolean(label.length);
  const typeInput = type !== undefined ? type : 'text';
  const strokeWidth = stroke !== undefined ? stroke : '2.4px';

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          id={fieldId}
          hasValue={hasValue}
          hasChildren={Boolean(children)}
          value={value}
          name={name}
          onChange={onChange}
          type={typeInput}
          autoComplete="off"
        />
        <Text hasLabel={hasLabel} type={typeInput} htmlFor={fieldId}>
          {label}
        </Text>
        {children && (
          <ButtonCircle
            onClick={onClick}
            type="button"
            strokeWidth={strokeWidth}
          >
            {children}
          </ButtonCircle>
        )}
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
