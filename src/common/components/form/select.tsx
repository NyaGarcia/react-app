import React, { FC } from 'react';

import { City } from 'common/interfaces/city.interface';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography/Typography';

interface Props {
  name: string;
  label: string;
  onChange: (id: string, value: any) => void;
  value: string;
  options: Array<City>;
  error?: string;
  type?: string;
  isDisabled?: boolean;
}

const onTextFieldChange = (fieldId: string, onChange: (fieldId, value) => void) => e => {
  onChange(fieldId, e.target.value);
};

export const Select: FC<Props> = props => {
  const { name, label, onChange, value, error, type = 'text', options, isDisabled = false } = props;
  return (
    <>
      <TextField
        label={label}
        value={value}
        type={type}
        select={true}
        onChange={onTextFieldChange(name, onChange)}
        disabled={isDisabled}
      >
        {options.map(({ name }) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </TextField>
      <Typography variant='caption' color='error' gutterBottom>
        {error}
      </Typography>
    </>
  );
};
