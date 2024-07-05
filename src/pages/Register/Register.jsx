import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { register, logIn } from 'redux/auth/auth-operations';
import 'react-toastify/dist/ReactToastify.css';

import * as yup from 'yup';
import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledHeaderAuth,
  StyledWrapInputAuth,
  StyledLabelAuth,
  StyledErrorAuth,
  // StyledLinkAuth,
  StyledWrapAuthBtn,
  AuthWrapComponent,
} from '../Login/Login.styled';
import { IoMdAlert } from 'react-icons/io';
import GlobalTablet from 'components/GlobalStylePublic/GlobalTablet';

let schema = yup.object({
  username: yup
    .string()
    .required('Please enter your name')
    .min(3, 'Min length 8 symbols')
    .max(32, 'Max length 32 symbols'),

  password: yup
    .string()
    .required('Please enter a password')
    .min(8, 'Min length 8 symbols')
    .max(32, 'Max length 32 symbols')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'Use characters and numbers'),

  email: yup
    .string()
    .required('Please enter a email')
    .email('Enter a correct email')
    .min(8, 'Min length 8 symbols')
    .max(32, 'Max length 32 symbols'),
});
function Register() {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.auth.lang);
  const startValue = {
    email: '',
    password: '',
    username: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(register(values))
      .unwrap()
      .then(() => dispatch(logIn({ email, password })))
      .then(() => resetForm());
  };
  return (
    <>
      <GlobalTablet />
      <AuthWrapComponent>
        <StyledHeaderAuth>{lang.register}</StyledHeaderAuth>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={schema}
          initialValues={startValue}
        >
          <StyledFormAuth>
            <StyledWrapInputAuth>
              <StyledInputAuth type="text" name="username" placeholder=" " />
              <StyledLabelAuth>{lang.namePlaceholder}</StyledLabelAuth>
              <ErrorMessage name="username">
                {m => (
                  <StyledErrorAuth>
                    <IoMdAlert />
                    {m}
                  </StyledErrorAuth>
                )}
              </ErrorMessage>
            </StyledWrapInputAuth>

            <StyledWrapInputAuth>
              <StyledInputAuth type="email" name="email" placeholder=" " />
              <StyledLabelAuth>{lang.emailPlaceholder}</StyledLabelAuth>
              <ErrorMessage name="email">
                {m => (
                  <StyledErrorAuth>
                    <IoMdAlert />
                    {m}
                  </StyledErrorAuth>
                )}
              </ErrorMessage>
            </StyledWrapInputAuth>

            <StyledWrapInputAuth>
              <StyledInputAuth
                type="password"
                name="password"
                placeholder=" "
                // pattern="/^[a-zA-Z0-9]{8,16}$/"
                // minlength="8"
              />
              <StyledLabelAuth>{lang.passwordPlaceholder}</StyledLabelAuth>

              <ErrorMessage name="password">
                {m => (
                  <StyledErrorAuth>
                    <IoMdAlert />
                    {m}
                  </StyledErrorAuth>
                )}
              </ErrorMessage>
            </StyledWrapInputAuth>
            <StyledWrapAuthBtn>
              <StyledBtnAuthAccent type="submit">
                {lang.register}
              </StyledBtnAuthAccent>
              {/* <StyledLinkAuth to="/login">Log in</StyledLinkAuth> */}
            </StyledWrapAuthBtn>
          </StyledFormAuth>
        </Formik>
      </AuthWrapComponent>
    </>
  );
}

export default Register;
