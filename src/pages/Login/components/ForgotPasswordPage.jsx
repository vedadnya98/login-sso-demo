import React, { useContext, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

// material ui
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
// context
import Store from '../../../store';
import Actions from '../../../store/actions';

//components
import LoginTextfield from '../../../components/StyledComponents/TextFieldLogin.js';

// styles
import Styles from '../styles/Login.styles';

// import VivproLogo from '../Images/svgs/logo';
import VivproLogo from '../../../Images/svgs/vivproLogo';

const ForgotPasswordPage = () => {
  const classes = Styles();
  const {dispatch } = useContext(Store);
  const [username,setUsername] = useState()
  const [code,setCode] = useState()
  const [newPassword,setNewPassword] = useState()
  const [gotCode,setGotCode] = useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword);
      // const user = await Auth.signIn(username, newPassword);
      // props.loginFunction(AuthState.SignedIn,user)
      await dispatch({
        type: Actions.SET_ALERT,
        value: { status: true, message: "Password Reset Successfully"},
      });
    } catch (error) {
      await dispatch({
        type: Actions.SET_ALERT,
        value: { status: true, message: 'Error Resetting Password : ',error },
      });
    }
  };

  const gotoCodePage = async ( event ) =>{
    event.preventDefault();
    setGotCode(false)
  }

  const handleGetCode = async (event) => {
    event.preventDefault();
    try {
      setGotCode(false)
      await Auth.forgotPassword(username);
      setGotCode(true)
    } catch (error) {
      await dispatch({
        type: Actions.SET_ALERT,
        value: { status: true, message: 'Error getting security Code : ',error },
      });
    }
  };

  if(gotCode){
  return (
        <Box className={classes.root} display='flex' flexDirection='column'  alignItems='center' justifyContent="center">
          <Box className={classes.outline} boxShadow={3}>
          <Box className={classes.header} display='flex' flexDirection='column'  alignItems='center' justifyContent="center">
          <Avatar className={classes.Avatar}>
            <VivproLogo/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
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
              id="code"
              label="Security Code"
              name="code"
              onChange={(event) => setCode(event.target.value)}
              required
            />
            <LoginTextfield
              InputProps={{ disableUnderline: true }}
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(event) => setNewPassword(event.target.value)}
              required
            />
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              onClick={(event) => handleSubmit(event)}
            >
              Reset Password
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              onClick={(event) => gotoCodePage(event)}
            >
              Resend Code
            </Button>
            </Box>
            </form>
            <Box className={classes.footer} display='flex' flexDirection='column'  alignItems='center' justifyContent="center">
                <Link href="/" variant="body2">
                  Go back to Login
                </Link>
            </Box>
          </Box>
    </Box>
  );
  }
  else{
    return(
    <Box className={classes.root} display='flex' flexDirection='column'  alignItems='center' justifyContent="center">
          <Box className={classes.outline} boxShadow={3}>
          <Box className={classes.header} display='flex' flexDirection='column'  alignItems='center' justifyContent="center">
          <Avatar className={classes.Avatar}>
            <VivproLogo/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Get Security Code
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
            <Button
              className={classes.button}
              type = "submit"
              variant="contained"
              onClick={(event) => handleGetCode(event)}
            >
              Get Code
            </Button>
            </Box>
            </form>
            <Box className={classes.footer} display='flex' flexDirection='column'  alignItems='center' justifyContent="center">
                <Link href="/" variant="body2">
                  Go back to Login
                </Link>
            </Box>
          </Box>
    </Box>
    );
  }
};

export default ForgotPasswordPage;
