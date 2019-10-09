import React, { useState } from 'react';

import { CITIES } from 'common/constants/main.constants';
import { HotelEdit } from './hotel-edit.component';
import { ValidationErrors } from 'final-form';
import { validateForm } from './hotel-edit.validation';

export const HotelEditContainer = () => {
  const [hotel, setHotel] = useState();

  const validate = (values: any): Promise<ValidationErrors> => {
    return validateForm(values);
  };

  const submit = (values: any) => {
    console.log('Successfuly edited hotel', values);
  };

  return <HotelEdit validate={validate} submit={submit} hotel={hotel} cities={CITIES} />;
};
