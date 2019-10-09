import { Validators, createFormValidation } from '@lemoncode/fonk';
import { getErrorMessages } from '../../common/utils/final-form.adapter';
const validationSchema = {
  field: {
    username: [Validators.required.validator],
    password: [Validators.required.validator],
  },
};

const formValidation = createFormValidation(validationSchema);

export const validateForm = async (
  values
): Promise<{
  [field: string]: string;
}> => {
  const { fieldErrors } = await formValidation.validateForm(values);
  return getErrorMessages(fieldErrors);
};
