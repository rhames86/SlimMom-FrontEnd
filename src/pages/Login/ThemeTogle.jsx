import {
  TogleSwitch,
  StyledTogleLable,
  StyledInput,
  StyledThemeSpan,
} from './ThemeTogle.styled';
import { getCheck, getTheme } from 'redux/theme/theme-selectors';
import { changeCheck, changeTheme } from 'redux/theme/theme-reducer.js';
import { useDispatch, useSelector } from 'react-redux';

export const ThemeTogle = () => {
  const checked = useSelector(getCheck);
  const selectedTheme = useSelector(getTheme);
  const dispatch = useDispatch();

  const HandleThemeChange = () => {
    const newChecked = !checked;
    dispatch(changeCheck(newChecked));
    const newTheme = selectedTheme === 'dark' ? 'light' : 'dark';
    dispatch(changeTheme(newTheme));
  };
  return (
    <TogleSwitch>
      <StyledTogleLable>
        <StyledInput
          type="checkbox"
          checked={checked}
          value={checked}
          onChange={HandleThemeChange}
        />
        <StyledThemeSpan></StyledThemeSpan>
      </StyledTogleLable>
    </TogleSwitch>
  );
};
