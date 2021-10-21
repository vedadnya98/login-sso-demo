import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  logo: {
    width: theme.spacing(30),
    height: theme.spacing(15),
  },
  btn: {
    marginTop: theme.spacing(2),
    background: theme.palette.secondary.main,
    color: theme.palette.white,
  },
}));
