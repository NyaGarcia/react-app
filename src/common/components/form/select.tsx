import React, { FC } from 'react';

import { City } from 'common/interfaces/city.interface';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography/Typography';

interface Props {
  name: string;
  label: string;
  value: string;
  options: Array<City>;
  error?: string;
  type?: string;
  isDisabled?: boolean;
}

export const Select: FC<Props> = props => {
  const { label, value, error, type = 'text', options, isDisabled = false } = props;
  return (
    <>
      <TextField label={label} value={value} type={type} select={true} disabled={isDisabled}>
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
