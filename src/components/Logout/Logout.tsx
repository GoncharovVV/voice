import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import AuthService from '../../services/AuthService';
import { onLogoutAction } from '../../store/actions/authActions';
import './Logout.scss';
export interface LogoutProps {
  children?: ReactNode;
}
const authService = new AuthService();

const Logout: React.FC<LogoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService.getLogout().then((data: any) => {
      if (data) {
        dispatch(onLogoutAction());
      }
      else {
        dispatch(onLogoutAction());
      }
    });
  };
  return (
    <button className="logout__button" onClick={handleLogout}>
      {children}
    </button>
  );
};

export default Logout;
