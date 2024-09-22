import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/token-storage';

const ProtectedAdminRoute = ({ children }) => {
  const token = getToken();
  if (!token?.user.isAdmin) {
    return <Navigate to="/not-found" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;
