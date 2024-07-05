import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import sprite from 'images/header/symbol-defs.svg';
import {
  StyledUserInfo,
  Button,
  NavUserInfo,
  StyledTitle,
  StyledSvgBack,
  ButtonBack,
} from './UserInfo.styled';
// import {IoReturnDownBackSharp} from 'react-icons';
import { toggleModal } from 'redux/modal/modal-reducer';
import { getIsModalOpen } from 'redux/modal/modal-selectors';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

function UserInfo() {
  const { username } = useSelector(getUser);
  const isModalOpen = useSelector(getIsModalOpen);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const lang = useSelector(state => state.auth.lang);

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <StyledUserInfo>
      {isModalOpen ? (
        <ButtonBack
          type="buton"
          onClick={() => {
            dispatch(toggleModal(!isModalOpen));
          }}
        >
          <StyledSvgBack>
            <use href={sprite + '#icon-back'}></use>
          </StyledSvgBack>
        </ButtonBack>
      ) : (
        <></>
      )}
      {isLoggedIn ? (
        <>
          {username && <StyledTitle>{username}</StyledTitle>}
          <NavUserInfo />
          <Button onClick={onLogout}>{lang.exit}</Button>
        </>
      ) : (
        <></>
      )}
    </StyledUserInfo>
  );
}

export default UserInfo;
