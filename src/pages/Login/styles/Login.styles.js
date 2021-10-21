import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    height : '100vh',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  outline:{
    height: 'auto',
    width : 'auto',
    borderRadius: '10px',
    padding: theme.spacing(4)
  },
  // header : {
  //   margin: theme.spacing(2)
  // },
  // form : {
  //   margin: theme.spacing(2)
  // },
  // footer : {
  //   margin: theme.spacing(2)
  // },
  button: {
    borderRadius: '10px',
    minWidth: '70px',
    backgroundColor: theme.palette.bot.buttonBackground,
    color: theme.palette.white,
    fontWeight: '600',
    margin: theme.spacing(2)
  },
  Avatar: { 
    minWidth: '100px',
    minHeight: '100px',
    backgroundColor : '#ffffff'
  }
}))