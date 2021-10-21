import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  main: {
    background: theme.palette.cards.background,
    height: '90vh',
    marginTop: theme.spacing(8),
    // width: '100%',
    padding: theme.spacing(2),
    marginLeft: theme.spacing(9) + 1,

    width: `calc(100% - ${theme.spacing(9) + 1}px)`,
    // backgroundColor : 'red',
  },
  airplaneIcon: {
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 2,
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  botIconFAB: {
    left: theme.spacing(2),
    bottom: theme.spacing(10),
    zIndex: theme.zIndex.drawer + 2,
    position: 'fixed',
  },

  botIcon: {
    height: '100%',
    width: '100%',
  },

  botIntroPopup: {
    fontWeight: '900',
    fontSize: '2vh',
    padding: '4px',
    borderRadius: '10px',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.lightBackground,
  },

  botTextPopup: {
    fontSize: '1.5vh',
    padding: '4px',
    color: theme.palette.white,
    opacity: 1,
  },

  Root: {
    height: '100%',
    padding: theme.spacing(3),
  },

  RootNews: {
    height: '100%',
  },
  Graphs: {
    background: theme.palette.white,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1.5),
  },
  RootGraphs: {
    display: 'flex',
    alignContent: 'space-between',
  },
  GridTitle: {
    fontSize: '3vh',
    color: '#464255',
    textAlign: 'left',
    marginLeft: theme.spacing(5),
  },
  add: {
    fontSize: theme.spacing(1.5),
    color: theme.palette.navbar.button,
    cursor: 'pointer',
    marginTop: theme.spacing(1),
    textAlign: 'end',
  },
  paperStatsSkelaton: {
    padding: theme.spacing(2),
    boxShadow: 'unset',
    borderRadius: theme.spacing(2),
    height: '10vh !important',
    marginBottom: '10px',
  },
  graphInnerChartGrid: {
    height: '90%',
    margin: '0 auto',
  },
  GraphSkelaton: {
    padding: theme.spacing(2),
    marginTop: '32px !important',
    boxShadow: 'unset',
    height: '65vh !important',
    width: '90vh !important',
    alignItem: 'center',
    justifyContent: 'center',
  },
  GridContentBox: {
    marginTop: theme.spacing(1.5),
  },

  ModalTitle: {
    padding: 0,
  },
  ModalCloseIconButton: {
    padding: 0,
    marginBottom: '-20px',
    marginLeft: '-20px',
    color: theme.palette.navbar.button,
  },
  ModalCloseIcon: {
    color: theme.palette.biologics.textPrimary,
  },

  Dialog: {
    minHeight: '70vh',
    padding: 0,
  },
  Button: {
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
  },
  Box : {
    justifyContent : 'center'
  }
}))