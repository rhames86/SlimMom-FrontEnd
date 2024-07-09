import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageSelection } from 'redux/auth/auth-reducer';
import Icon from '../Icon/Icon';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    .container {
      margin-left: 10px;
    }
  }
`;
const Button = styled.button`
  border: none;
  background-color: transparent;

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
  }
`;
const IconStyled = styled(Icon)`
  pointer-events: none;
  cursor: pointer;
`;
const List = styled.ul`
  position: absolute;
  left: 24px;
  top: 20px;
  padding: 5px;
  background-color: #c9b8b8;
  color: ${({ theme }) => theme.colors.firstText};
  font-size: 14px;
  text-transform: none;
  /* box-shadow: 0 0 5px #9b9faa; */
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 5px;
  }
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #fff
  padding: 5px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const LanguageBar = ({ big }) => {
  const lang = useSelector(state => state.auth.lang);
  const [currentLang, setCurrentLang] = useState(lang.lang);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('click', onClick);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('click', onClick);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const onClick = event => {
    if (event.target.name !== 'btn') {
      setIsShow(false);
    }
  };

  const onKeyDown = event => {
    if (event.code === 'Tab' || event.code === 'Escape') {
      setIsShow(false);
    }
  };

  const setLang = lang => {
    setCurrentLang(lang);
    dispatch(languageSelection(lang));
  };

  const showSelection = () => {
    setIsShow(state => !state);
  };

  const selectLanguage = event => {
    setLang(event.target.dataset.key);
    setIsShow(false);
  };

  return (
    <Container>
      <Button name="btn" type="button" onClick={showSelection}>
        <IconStyled
          icon={currentLang}
          width={big ? 48 : 32}
          height={big ? 32 : 21}
        />
      </Button>
      {isShow && (
        <List style={big && { top: 36 }}>
          <ListItem data-key="ua" onClick={selectLanguage}>
            <IconStyled
              icon="ua"
              width={big ? 48 : 24}
              height={big ? 32 : 16}
            />
            &nbsp;Українська
          </ListItem>
          <ListItem data-key="en" onClick={selectLanguage}>
            <IconStyled
              icon="en"
              width={big ? 48 : 24}
              height={big ? 32 : 16}
            />
            &nbsp;English
          </ListItem>
          <ListItem data-key="es" onClick={selectLanguage}>
            <IconStyled
              icon="es"
              width={big ? 48 : 24}
              height={big ? 32 : 16}
            />
            <IconStyled
              icon="do"
              width={big ? 48 : 24}
              height={big ? 32 : 16}
            />
            &nbsp;Español
          </ListItem>
        </List>
      )}
    </Container>
  );
};

export default LanguageBar;
