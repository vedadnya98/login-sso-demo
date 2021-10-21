import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `TextField` component.
const LoginTextField = withStyles((theme) => ({
  root: {
    height: theme.spacing(6),
    backgroundColor: theme.palette.white,
    border: `2px solid ${theme.palette.primary.lightBorder}`,
    borderRadius: theme.spacing(1.25),
    width: 'auto',
    margin: theme.spacing(1),
    minWidth:400,
    '& .MuiInputBase-input' : {
        marginTop : '-5px',
        marginLeft : '5px'
    },
    '& .MuiInputLabel-root' : {
      marginTop : '-5px',
      marginLeft : '5px'
    }
  },
  label: {
    marginTop : '-5px'
  },
}))(TextField);

export default LoginTextField;
