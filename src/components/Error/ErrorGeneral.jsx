import React from 'react';

// material ui
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


// styles
import ErrorStyles from './ErrorGeneral.styles';

const ErrorGeneral = () => {
  const classes = ErrorStyles();

  return (
    <Container>
      <Box
        className={classes.root}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Typography variant='subtitle1'>
          Sorry, Something went wrong!
        </Typography>
        <Button variant='contained' href='/' className={classes.btn}>
          Go to home
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorGeneral;
