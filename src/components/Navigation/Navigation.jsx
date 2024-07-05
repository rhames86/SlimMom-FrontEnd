// import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import UserInfo from '../UserInfo';
import { useSelector } from 'react-redux';
import {
  NavigationList,
  NavigationItem,
  NavItem,
  NavigationLogin,
  NavigationDiary,
  StyledUserInfo,
  NavigationListDiary,
  StyledDiv,
} from './Navigation.styled';
import { getIsModalOpen } from 'redux/modal/modal-selectors';
import LanguageBar from 'components/LanguageBar/LanguageBar';
import { ThemeTogle } from 'pages/Login/ThemeTogle';
import { StyledWrapper } from './Navigation.styled';

function Navigation() {
  const isUserLogin = useSelector(getIsLoggedIn);
  const isModalOpen = useSelector(getIsModalOpen);
  const lang = useSelector(state => state.auth.lang);

  return (
    <StyledDiv>
      <nav>
        {!isUserLogin ? (
          <>
            <NavigationLogin>
              <NavigationList>
                <NavigationItem>
                  <NavItem to="login">{lang.login}</NavItem>
                </NavigationItem>
                <NavigationItem>
                  <NavItem to="registration">{lang.register}</NavItem>
                </NavigationItem>
                <NavigationItem>
                  <StyledWrapper>
                    <ThemeTogle />
                  </StyledWrapper>
                </NavigationItem>
                <NavigationItem>
                  <StyledWrapper>
                    <LanguageBar />
                  </StyledWrapper>
                </NavigationItem>
              </NavigationList>
            </NavigationLogin>
            {isModalOpen ? <UserInfo /> : <></>}
          </>
        ) : (
          <NavigationDiary>
            <NavigationListDiary>
              <NavigationList>
                <NavigationItem>
                  <NavItem to="diary">{lang.diary}</NavItem>
                </NavigationItem>
                <NavigationItem>
                  <NavItem to="calculator">{lang.calculator}</NavItem>
                </NavigationItem>
                <NavigationItem>
                  <ThemeTogle />
                </NavigationItem>
                <NavigationItem>
                  <LanguageBar />
                </NavigationItem>
              </NavigationList>
            </NavigationListDiary>
            {
              <StyledUserInfo>
                <UserInfo />
              </StyledUserInfo>
            }
          </NavigationDiary>
        )}
      </nav>
    </StyledDiv>
  );
}
export default Navigation;
