import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import PropTypes from 'prop-types';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  // const Component = navigate('/contacts');

  return isLoggedIn ? children : <Navigate to="/login" />;
  // return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
