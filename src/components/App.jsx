import React, { useEffect, useState } from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Auth } from 'aws-amplify';
import { ToastContainer} from 'react-toastify';
import theme from '../theme';
import '../App.css';
import 'react-toastify/dist/ReactToastify.css';
//context store
import { StateProvider } from '../store';
//error boundary
import ErrorBoundary from './Error/ErrorBoundary';
// import VivproLogo from '../Images/svgs/logo';
//components
// import Home from './Home';
import Home from '../pages/Home';
import Login from '../pages/Login';
import AlertMessage from './CustomComponents/Alerts';

const App = () => {
  // let [isAuthenticate, setAuthStatus1] = useState(false);
  // let [isAuthenticating, setAuthenticatingStatus] = useState(false);
  // const [authState, setAuthState] = React.useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // const setAuthStatus = (authenticated) => {
  //   setAuthStatus1(authenticated);
  // };

  useEffect(async () => {
    try {
        setLoading(true)
        let currentUser = await Auth.currentAuthenticatedUser()
        setUser(currentUser)
        setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }, []);

  const loginFunction = async(userData) => {
        setUser(userData);
  }

  const logOutMethod = async () => {
    if (user) {
      await Auth.signOut();
      // setAuthStatus(false);
      // setAuthenticatingStatus(false);
      setUser(false);
      // history.push("/");
      window.location.href = '/';
    }
  };

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <StateProvider>
            <AlertMessage />
            <ToastContainer
              position='top-right'
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {user ? (
              // <Router>

              //   <Switch>
                  // <Route key={1} exact path='/' render={<Home/>} />
                  <Home logOutMethod={logOutMethod} user={user}/>

              //   </Switch>
              // </Router>
            ): 
            loading===true?(
              null
            )
            : (
              <Login
                page = {window.location.pathname}
                loginFunction = {loginFunction}
              />
            )}
          </StateProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
};

export default App;
