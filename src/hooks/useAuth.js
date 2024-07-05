
import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getIsRefreshing,
  getUser,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const user = useSelector(getUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};


