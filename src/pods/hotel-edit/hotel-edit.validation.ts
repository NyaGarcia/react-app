import {
  FormValidationResult,
  ValidationSchema,
  Validators,
  createFormValidation,
} from '@lemoncode/fonk';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required.validator],
    rating: [Validators.required.validator],
    description: [Validators.required.validator],
  },
};

const formValidation = createFormValidation(validationSchema);

export const validateForm = async (formValues): Promise<FormValidationResult> => {
  return formValidation.validateForm(formValues);
};
