import React from 'react';

//context
// import { CardsStateProvider } from '../../store/CardsPage/index';

// child components
import Login from './components/Login';
import ForgotPasswordPage from './components/ForgotPasswordPage';

const LoginPage = (props) => {

  if(props.page === '/reset-password'){
  return (
      <ForgotPasswordPage loginFunction={props.loginFunction}/>
  );
  }
  else{
    return (
      <Login loginFunction={props.loginFunction}/>
    );
    }
};

export default LoginPage ;
