import palette from './palette';
// @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

export default {
  fontFamily: 'Nunito Sans',
  fontSize: 20,
  htmlFontSize: 20,
  h1: {
    // fontFamily: ['Lato', 'sans-serif'].join(','),
    // fontFamily: ['Oswald', 'sans-serif'].join(','),
    fontWeight: 700,
    fontSize: '2rem',
    color: palette.primary.main,
    // margin: 10,
  },
  title: {
    fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
    fontWeight: 700,
    fontSize: '3rem',
    color: palette.primary.main,
    letterSpacing: '3px',
    marginBottom: 10,
  },
  subtitle1: {
    fontSize: '2.5vh',
    fontWeight: '600',
    fontFamily: 'Nunito Sans',
  },
  subtitle2: {
    fontSize: '2.2vh',
    fontWeight: '600',
    fontFamily: 'Nunito Sans',
  },
  h2: {
    fontSize: '2rem',
    color: palette.common.primaryBlack,
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
    fontSize: '1.125rem',
    color: palette.black,
    lineHeight: 2,
    fontWeight: 'regular',
    textTransform: 'capitalize',
    letterSpacing: '1px',
  },
  body1: {
    // color: palette.common.primaryGray,
    marginRight: '3px',
    fontSize: '2vh',
    lineHeight: 1.25,
  },
  body2: {
    fontSize: '2vh',
    fontWeight: '600',
    fontFamily: 'Nunito Sans',
  },
  body3: {
    fontSize: '1.5vh',
    fontFamily: 'Nunito Sans',
    fontWeight: '500',
  },
};
