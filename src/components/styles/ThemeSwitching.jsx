import { useEffect } from 'react';
import { light, dark } from './Theme.styled';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getCheck, getTheme } from 'redux/theme/theme-selectors.js';
import { changeCheck, changeTheme } from 'redux/theme/theme-reducer.js';
import PropTypes from 'prop-types';

export const ThemeSwitching = ({ children }) => {
  const selectedTheme = useSelector(getTheme);
  const selectedCheck = useSelector(getCheck);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedTheme) {
      dispatch(changeTheme(selectedTheme));
    }
    if (selectedCheck) {
      dispatch(changeCheck(selectedCheck));
    }
  }, [dispatch, selectedCheck, selectedTheme]);

  const HandleThemeChoose = () => {
    return selectedTheme === 'dark' ? dark : light;
  };
  return <ThemeProvider theme={HandleThemeChoose}>{children}</ThemeProvider>;
};

ThemeSwitching.propTypes = {
  children: PropTypes.element.isRequired,
};
