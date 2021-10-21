import React, { useContext, useState } from 'react';
import { Auth } from 'aws-amplify';

// context
import Store from '../../../store';
import Actions from '../../../store/actions';

// material ui
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

//components
// import SSOButton from './SSO-MS'

import SSOButton from './SSO-MS'

import LoginTextfield from '../../../components/StyledComponents/TextFieldLogin.js';

// styles
import Styles from '../styles/Login.styles';

// import VivproLogo from '../Images/svgs/logo';
import VivproLogo from '../../../Images/svgs/vivproLogo';

const Login = (props) => {
  const classes = Styles();
  const {dispatch } = useContext(Store);
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await Auth.signIn(username, password);
      props.loginFunction(user)
    } catch (error) {
      await dispatch({
        type: Actions.SET_ALERT,
        value: { status: true, message: 'Wrong Username or Password' },
      });
    }
  };

  return (
        <Box className={classes.root} display='flex' flexDirection='column'  alignItems='center' justifyContent="center">
          <Box className={classes.outline} boxShadow={3}>
          <Box className={classes.header} display='flex' flexDirection='column'  alignItems='center' justifyContent="center">
          <Avatar className={classes.Avatar}>
            <VivproLogo/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          </Box>
          <form>
            <Box className={classes.form} display='flex' flexDirection='column'  alignItems='center' justifyContent="center">
            <LoginTextfield
              InputProps={{ disableUnderline: true }}
              id="email"
              label="Email Address"
              name="email"
              onChange={(event) => setUsername(event.target.value)}
              required
            />
            <LoginTextfield
              InputProps={{ disableUnderline: true }}
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              onClick={(event) => handleSubmit(event)}
            >
              Log In
            </Button>
            </Box>
            </form>
            <Box className={classes.footer} display='flex' flexDirection='column'  alignItems='center' justifyContent="center">
                <Link href="/reset-password" variant="body2">
                  Change Password / Forgot password?
                </Link>
                <SSOButton/>
            </Box>
          </Box>
    </Box>
  );
};

export default Login;
