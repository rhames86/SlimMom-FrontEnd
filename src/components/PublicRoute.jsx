import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import PropTypes from 'prop-types';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PublicRoute = ({ children, restricted }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = restricted && isLoggedIn;
  return !shouldRedirect ? children : <Navigate to="/calculator" />;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
  restricted: PropTypes.bool,
};
