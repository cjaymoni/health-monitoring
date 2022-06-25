import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Patient from './Pages/Patients';
import Visits from './Pages/Visits';
import Appointments from './Pages/Appointments';
import Vaccine from './Pages/Vaccine';
import GhanaCard from './Pages/GhanaCard';
import Specialisation from './Pages/Specialisation';
import Error404 from './Pages/404';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPasswordPage from './Auth/ForgotPassword';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const { authUser } = useSelector(({ auth }) => auth);
  const location = useLocation();

  if (location.pathname === '' || location.pathname === '/') {
    return <Redirect to={'/dashboard'} />;
  } else if (authUser && location.pathname === '/signin') {
    return <Redirect to={'/dashboard'} />;
  }

  return (
    <React.Fragment>
      <Switch>
        <RestrictedRoute path="/dashboard" component={Dashboard} />
        <RestrictedRoute path="/patients" component={Patient} />
        <RestrictedRoute path="/visits" component={Visits} />
        <RestrictedRoute path="/appointments" component={Appointments} />
        <RestrictedRoute path="/vaccine" component={Vaccine} />
        <RestrictedRoute path="/ghanacard" component={GhanaCard} />
        <RestrictedRoute path="/specialisation" component={Specialisation} />
        <Route path="/signin" component={Login} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
