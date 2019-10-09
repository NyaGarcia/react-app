import { Field, Form } from 'react-final-form';
import { Select, TextField } from 'common/components/form';

import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { Props } from './hotel-edit.props.interface';
import React from 'react';

export const HotelEdit = ({ hotel, cities, validate }: Props) => {
  const submit = () => {};

  return (
    <Form
      onSubmit={submit}
      validate={validate}
      render={({ handleSubmit, form, pristine, submitting }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Field
                fullWidth
                name='name'
                component={TextField}
                placeholder='Hilton'
                label='Name'
              />
            </Grid>
            <Grid item xs={9}>
              <Field
                fullWidth
                name='picture'
                component={TextField}
                type=''
                placeholder='picture'
                label='Picture'
              />
            </Grid>
            <Grid item xs={6}>
              <Select name='cities' label='Cities' options={cities} value={hotel.name} />
            </Grid>
            <Grid item xs={6}>
              <Button color='primary' type='submit' variant='contained' disabled={submitting}>
                Save
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={form.reset} disabled={pristine}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};
