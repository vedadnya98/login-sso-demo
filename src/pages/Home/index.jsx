import React, { useEffect } from 'react';

// material ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';

// styles
import HomeStyles from './styles/Home.styles';

import VivproLogo from '../../Images/svgs/vivproLogo';

export default function Home({logOutMethod, user}) {
  const classes = HomeStyles();

 

  useEffect(() => {
    async function getData() {
    }
    getData();
  }, []);

  return (
    <div className={classes.main}>
      <Grid container spacing={4} className={classes.Root}>
        <Grid item container xs={12} className={classes.RootGraphs}>
            <Grid item xs={12}>
                <Grid spacing={2} container className={classes.GridStats}>
                  <Grid item xs={3}>
                    <Skeleton variant='rect' className={classes.paperStatsSkelaton} />
                  </Grid>
                  <Grid item xs={3}>
                    <Skeleton variant='rect' className={classes.paperStatsSkelaton} />
                  </Grid>
                  <Grid item xs={3}>
                    <Skeleton variant='rect' className={classes.paperStatsSkelaton} />
                  </Grid>
                  <Grid item xs={3}>
                    <Skeleton variant='rect' className={classes.paperStatsSkelaton} />
                  </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.Graphs}>
              <Box display='flex' justify='center' alignItems='center' className={classes.Box}>
              <Avatar className={classes.Avatar}>
                <VivproLogo/>
              </Avatar>
              </Box>
                    <Grid
                      xs={12}
                      container
                      item
                      justify='center'
                      alignItems='center'
                      className={classes.GridContentBox}>
                      <Typography>
                        Welcome, you're logged in now
                        , Your user object is below : 
                      </Typography>
                    </Grid>
            </Grid>

            <Grid item xs={12} className={classes.Graphs}>
              <Box display='flex' id='homeInsights'>
              </Box>
                    <Grid
                      xs={12}
                      container
                      item
                      justify='center'
                      alignItems='center'
                      className={classes.GridContentBox}>
                      <Typography>
                        User Object : <pre>{JSON.stringify(user.attributes, null, 2) }</pre>
                      </Typography>
                    </Grid>
            </Grid>

            <Grid item xs={12} className={classes.Graphs}>
              <Box display='flex' id='homeInsights'>
              </Box>
                    <Grid
                      xs={12}
                      container
                      item
                      justify='center'
                      alignItems='center'
                      className={classes.GridContentBox}>
                      <Button
                        className={classes.Button}
                        variant="contained"
                        onClick={(event) => logOutMethod(event)}
                      >
                        Log Out
                      </Button>
                    </Grid>
            </Grid>

          </Grid>
      </Grid>
    </div>
  );
}
