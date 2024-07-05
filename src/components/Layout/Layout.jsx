import { Outlet } from 'react-router-dom';
import { CommonContainer, Wrapper } from './Layout.styled';
// import { Suspense } from 'react';
import Header from '../Header/Header';

import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/theme/theme-selectors';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import RightSideBar from 'components/RightSideBar/RightSideBar';

// import Loader from '../Loader/Loader';

export const Layout = () => {
  const currentTheme = useSelector(getTheme);
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <CommonContainer>
        <Header />
        <main>
          <ToastContainer
            position="top-right"
            autoClose={1700}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={currentTheme}
          />
          {isLoggedIn ? (
            <Wrapper>
              <Outlet />
              <RightSideBar />
            </Wrapper>
          ) : (
            <Wrapper>
              <Outlet />
            </Wrapper>
          )}
        </main>
      </CommonContainer>
    </>
  );
};
