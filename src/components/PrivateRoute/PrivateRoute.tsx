import React, { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { Urls } from '../../utils/types';
export interface PrivateRouteProps {
  component: ReactNode;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }: any) => {

  const loginDetails: any = useSelector((state: any) => state.loginDetails.details);
  const [authed, setAuthed] = useState<boolean>(true);

  useEffect(() => {
    setAuthed(!!Object.keys(loginDetails).length);
  }, [loginDetails]);

  return (
    <Route
      {...rest}
      render={(props) => (authed ? <Component {...props} /> : <Redirect to={Urls.LOGIN} />)}
    />
  );
};

export default PrivateRoute;
