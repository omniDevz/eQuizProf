import React from 'react';

import { SelectWrapper, SelectStyled, Text } from './styled';

import { SelectProps } from './interface';

const Select: React.FC<SelectProps> = ({
  options,
  value,
  name,
  text,
  onChange,
}) => {
  const fieldId = `id_${name}`;
  const hasValue = value !== '';

  return (
    <SelectWrapper hasValue={hasValue}>
      <SelectStyled
        id={fieldId}
        name={name}
        className="react-select-container"
        classNamePrefix="react-select"
        options={options}
        placeholder=""
        onChange={onChange}
      />
      <Text htmlFor={fieldId}>{text}</Text>
    </SelectWrapper>
  );
};

export default Select;
