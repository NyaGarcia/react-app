import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from 'common/components/form/text-field';
import { Grid } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { Props } from './props.interface';
import { validateForm } from './login.validation';

export const LoginForm = (props: Props) => {
  const { onLogin, initialLoginInfo } = props;

  const validate = async values => {
    const errors = await validateForm(values);
    console.log(errors);
    return errors;
  };

  return (
    <Form
      onSubmit={values => onLogin(values)}
      initialValues={initialLoginInfo}
      validate={validate}
      render={({ handleSubmit, form, pristine, submitting }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Field
                fullWidth
                name='username'
                component={TextField}
                placeholder='Nya'
                label='Name'
              />
            </Grid>
            <Grid item xs={9}>
              <Field
                fullWidth
                name='password'
                type='password'
                component={TextField}
                placeholder='password'
                label='Password'
              />
            </Grid>
            <Grid item xs={6}>
              <Button color='primary' type='submit' variant='contained' disabled={submitting}>
                Submit
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
