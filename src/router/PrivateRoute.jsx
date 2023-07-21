import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { state } = useLocation();

  return state?.logged ? children : <Navigate to="/" />;
}

export default PrivateRoute;
