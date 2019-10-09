export const getErrorMessages = (object): { [field: string]: string } => {
  return Object.keys(object).reduce((acc, key) => {
    const { message } = object[key];
    if (message) acc[key] = message;
    return acc;
  }, {});
};
