import React from 'react';

import { FormFieldProps } from './interface';
import {
  FormFieldWrapper,
  Label,
  Input,
  Text,
  Prefix,
  Textarea,
  ButtonCircle,
} from './styled';

const FormField: React.FC<FormFieldProps> = ({
  children,
  value,
  name,
  label,
  onChange,
  onClick,
  type,
  stroke,
  prefix,
  maxLength,
}) => {
  const fieldId = `id_${name}`;
  const hasValue = value !== '';
  const hasLabel = Boolean(label.length);
  const typeInput = type !== undefined ? type : 'text';
  const isTextarea = type === 'textarea';
  const strokeWidth = stroke !== undefined ? stroke : '2.4px';
  const hasPrefix = prefix !== undefined;

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId} type={typeInput}>
        {hasPrefix && <Prefix htmlFor={fieldId}>{prefix}</Prefix>}
        {isTextarea ? (
          <Textarea
            id={fieldId}
            hasValue={hasValue}
            hasChildren={Boolean(children)}
            value={value}
            name={name}
            onChange={onChange}
            autoComplete="off"
            maxLength={maxLength}
          />
        ) : (
          <Input
            id={fieldId}
            hasValue={hasValue}
            hasChildren={Boolean(children)}
            value={value}
            name={name}
            onChange={onChange}
            type={typeInput}
            autoComplete="off"
            maxLength={maxLength}
          />
        )}

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
