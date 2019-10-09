import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';
import TextFieldMui from '@material-ui/core/TextField';

export const TextField: FC<FieldRenderProps<any, any>> = ({
  input: { name, onChange, value, ...inputRest },
  meta,
  ...rest
}) => {
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

  return (
    <TextFieldMui
      {...rest}
      name={name}
      error={showError}
      helperText={showError ? meta.error || meta.submitError : undefined}
      inputProps={inputRest}
      onChange={onChange}
      value={value}
    />
  );
};
