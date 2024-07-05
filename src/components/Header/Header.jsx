import Navigation from 'components/Navigation';
// import UserInfo from 'components/UserInfo';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import {
  StyledHeader,
  Nav,
  LogoImg,
  LogoSlim,
  LogoMom,
  NavigationList,
  NavigationItem,
  NavItem,
  ButtonClose,
  ButtonBurger,
  Wrapper,
  StyledSvgBurger,
  StyledSvgClose,
  StyledLogo,
  StyledSlimMom,
  // StyledNavigation,
  // StyledUserInfo,
  StyledLogoMob,
  NavElemnt,
  StyledNavLinkSupport,
  StyledWrapper,
  // StyledUse,
} from './Header.styled';
import sprite from 'images/header/symbol-defs.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LanguageBar from 'components/LanguageBar/LanguageBar';
import { getTheme } from 'redux/theme/theme-selectors';
import { useAuth } from 'hooks';
import { ThemeTogle } from 'pages/Login/ThemeTogle';

import logoDark1x from 'images/header/logoDark1x.png';
import logoDark2x from 'images/header/logoDark2x.png';
import logoDarkWebp1x from 'images/header/logoDarkWebp1x.webp';
import logoDarkWebp2x from 'images/header/logoDarkWebp2x.webp';
import logoDarkAvif1x from 'images/header/logoDarkAvif1x.avif';
import logoDarkAvif2x from 'images/header/logoDarkAvif2x.avif';

import logoLight1x from 'images/header/logoLight1x.png';
import logoLight2x from 'images/header/logoLight2x.png';
import logoLightWebp1x from 'images/header/logoLightWebp1x.webp';
import logoLightWebp2x from 'images/header/logoLightWebp2x.webp';
import logoLightAvif1x from 'images/header/logoLightAvif1x.avif';
import logoLightAvif2x from 'images/header/logoLightAvif2x.avif';
// import { BsDisplay } from 'react-icons/bs';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const isUserLogin = useSelector(getIsLoggedIn);
  const lang = useSelector(state => state.auth.lang);
  const selectedTheme = useSelector(getTheme);
  const openHandler = () => {
    setOpen(!isOpen);
  };

  // function chooseImg() {
  //   if (selectedTheme === 'dark') {
  //     return logoImgLight;
  //   } else {
  //     return logoImgDark;
  //   }
  // }
  function chooseLink() {
    if (isLoggedIn) {
      return '/calculator';
    } else {
      return '/';
    }
  }

  return (
    <>
      <StyledHeader>
        <Nav />
        <StyledLogo>
          <StyledNavLinkSupport to={chooseLink()}>
            {selectedTheme === 'light' ? (
              <LogoImg>
                <source
                  srcSet={logoDarkAvif2x}
                  type="image/avif"
                  media="(min-resolution: 2dppx)"
                />
                <source srcSet={logoDarkAvif1x} type="image/avif" />
                <source
                  srcSet={logoDarkWebp2x}
                  type="image/webp"
                  media="(min-resolution: 2dppx)"
                />
                <source srcSet={logoDarkWebp1x} type="image/webp" />
                <source
                  srcSet={logoDark2x}
                  type="image/png"
                  media="(min-resolution: 2dppx)"
                />
                <source srcSet={logoDark1x} type="image/png" />
                <img src={logoDark1x} alt="logo" />
              </LogoImg>
            ) : (
              <LogoImg>
                <source
                  srcSet={logoLightAvif2x}
                  type="image/avif"
                  media="(min-resolution: 2dppx)"
                />
                <source srcSet={logoLightAvif1x} type="image/avif" />
                <source
                  srcSet={logoLightWebp2x}
                  type="image/webp"
                  media="(min-resolution: 2dppx)"
                />
                <source srcSet={logoLightWebp1x} type="image/webp" />
                <source
                  srcSet={logoLight2x}
                  type="image/png"
                  media="(min-resolution: 2dppx)"
                />
                <source srcSet={logoLight1x} type="image/png" />
                <img src={logoLight1x} alt="logo" />
              </LogoImg>
            )}
            <StyledSlimMom>
              <LogoSlim>
                <use href={sprite + '#icon-slim'}></use>
              </LogoSlim>
              <LogoMom>
                <use href={sprite + '#icon-mom'}></use>
              </LogoMom>
            </StyledSlimMom>
          </StyledNavLinkSupport>
        </StyledLogo>
        <StyledLogoMob>
          <StyledNavLinkSupport to={chooseLink()}>
            {' '}
            {selectedTheme === 'light' ? (
              <LogoImg>
                <source
                  srcSet={logoDarkAvif2x}
                  type="image/avif"
                  media="(min-resolution: 2dppx)"
                />
                <source srcSet={logoDarkAvif1x} type="image/avif" />
                <source
                  srcSet={logoDarkWebp2x}
                  type="image/webp"
                  media="(min-resolution: 2dppx)"
                />
                <source srcSet={logoDarkWebp1x} type="image/webp" />
                <source
                  srcSet={logoDark2x}
                  type="image/png"
                  media="(min-resolution: 2dppx)"
                />
                <source srcSet={logoDark1x} type="image/png" />
                <img src={logoDark1x} alt="logo" />
              </LogoImg>
            ) : (
              <LogoImg>
                <source
                  srcSet={logoLightAvif2x}
                  type="image/avif"
                  media="(min-resolution: 2dppx)"
                />
                <source srcSet={logoLightAvif1x} type="image/avif" />
                <source
                  srcSet={logoLightWebp2x}
                  type="image/webp"
                  media="(min-resolution: 2dppx)"
                />
                <source srcSet={logoLightWebp1x} type="image/webp" />
                <source
                  srcSet={logoLight2x}
                  type="image/png"
                  media="(min-resolution: 2dppx)"
                />
                <source srcSet={logoLight1x} type="image/png" />
                <img src={logoLight1x} alt="logo" />
              </LogoImg>
            )}
            {isUserLogin && (
              <StyledSlimMom>
                <LogoSlim>
                  <use href={sprite + '#icon-slim'}></use>
                </LogoSlim>
                <LogoMom>
                  <use href={sprite + '#icon-mom'}></use>
                </LogoMom>
              </StyledSlimMom>
            )}
          </StyledNavLinkSupport>
        </StyledLogoMob>
        <NavElemnt />
        {/* <StyledNavigation> */}
        <Navigation />
        {/* </StyledNavigation> */}

        <StyledWrapper>
          {isOpen ? (
            <ButtonClose onClick={openHandler}>
              <StyledSvgClose>
                <use href={sprite + '#icon-close'}></use>
              </StyledSvgClose>
            </ButtonClose>
          ) : (
            <ButtonBurger onClick={openHandler}>
              <StyledSvgBurger>
                <use href={sprite + '#icon-burger'}></use>
              </StyledSvgBurger>
            </ButtonBurger>
          )}
        </StyledWrapper>

        {isOpen && (
          <Wrapper>
            <NavigationList>
              <NavigationItem>
                <ThemeTogle />
              </NavigationItem>
              <NavigationItem>
                <LanguageBar />
              </NavigationItem>
              {isUserLogin && (
                <>
                  {' '}
                  <NavigationItem>
                    <NavItem to="/diary" onClick={openHandler}>
                      {lang.diary}
                    </NavItem>
                  </NavigationItem>
                  <NavigationItem>
                    <NavItem to="/calculator" onClick={openHandler}>
                      {lang.calculator}
                    </NavItem>
                  </NavigationItem>
                </>
              )}
            </NavigationList>
          </Wrapper>
        )}
      </StyledHeader>
      {/* {isOpen && (
        <StyledUserInfo>
          <UserInfo />
        </StyledUserInfo>
      )} */}
    </>
  );
}

export default Header;
