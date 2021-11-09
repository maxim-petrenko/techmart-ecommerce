import * as Yup from 'yup';

const requiredMessage = 'Обязательно';

export default Yup.object().shape({
  loginOrEmail: Yup.string()
    .required(requiredMessage)
    .default(''),
  password: Yup.string()
    .required(requiredMessage)
    .default(''),
});
