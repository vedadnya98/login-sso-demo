import React, { useContext } from 'react';
//material ui
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import Store from '../../../store';
import Actions from '../../../store/actions';

const AlertMessage = () => {
  const { state, dispatch } = useContext(Store);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({
      type: Actions.SET_ALERT,
      value: { message: null, status: false },
    });
  };

  return (
    <>
      <Snackbar
        open={state.alert && state.alert.status}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={state.alert.color || 'error'}>
          {state.alert && state.alert.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertMessage;
