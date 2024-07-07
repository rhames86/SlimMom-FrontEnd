import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, refreshUser } from 'redux/auth/auth-operations';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { getIsRefreshing } from 'redux/auth/auth-selectors';
import { ThemeSwitching } from './styles/ThemeSwitching';
import { useAuth } from 'hooks';
import { dayInfo } from 'redux/day/day-operations';
import { GlobalStylesPrivate } from './styles/GlobalStylePrivate.styled';
import { GlobalStylePublic } from './GlobalStylePublic/GlobalStylePublic.styled';
import Loader from './Loader/Loader';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Home from 'pages/Home';
import Calculator from 'pages/Calculator';
import Diary from 'pages/Diary';
import PageNotFound from './PageNotFound/PageNotFound';

export const App = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const normalizedSelectedDate = new Date().toISOString().split('T')[0];
  useEffect(() => {
    dispatch(refreshUser())
      .unwrap()
      .then(() => dispatch(getUser()))
      .then(() => dispatch(dayInfo({ date: normalizedSelectedDate })));
  }, [dispatch, normalizedSelectedDate]);

  const isRefreshing = useSelector(getIsRefreshing);

  return (
    <ThemeSwitching>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          {isLoggedIn ? <GlobalStylesPrivate /> : <GlobalStylePublic />}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/registration"
                element={
                  <PublicRoute restricted>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute restricted>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/calculator"
                element={
                  <PrivateRoute>
                    <Calculator />
                  </PrivateRoute>
                }
              />
              <Route
                path="/diary"
                element={
                  <PrivateRoute>
                    <Diary />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
          {/* </Suspense> */}
        </>
      )}
    </ThemeSwitching>
  );
};
