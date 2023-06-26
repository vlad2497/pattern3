export const nameValidation = {
  validate: (value: string) => {
    if (value.length < 10) {
      return "Не менее 10 символов!";
    }
    return true;
  },
};
