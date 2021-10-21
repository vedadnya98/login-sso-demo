const primaryMainColor = '#0352CC';
const secondaryMainColor = '#3AB09E';
const lightBackground = '#f7fbff';
const lightBorder = '#e3f1ff';
const hoverPrimary = '#DD861F';
const secondaryLight = '#ffbba7';
const iconPrimary = '#B8B8B8';
const iconHover = '#F4F4F4';
const white = '#FFFFFF';
const black = '#000000';
const primaryMainColorShadow = 'rgb(76, 192, 196,0.3)';
const primaryShadow = 'rgb(220, 220, 220,0.5)';
const primaryDarkShadow = 'rgb(153, 153, 153,0.5)';
const successGreen = '#2ecc71';
const fatalRed = '#cd2653';

export default {
  white,
  black,
  successGreen,
  fatalRed,
  type: 'light',
  common: {
    primaryBlack: '#3B3B3B',
    otherBlack: '#040D14',
    primaryGray: '#848383',
    errorRed: '#FF0000',
    orangeDark: '#d56201',
    orange: '#FF9C28',
    facebookMainColor: '#3b5998',
    contrastMainColor: '#4548cb',
    grayBorder: '#B8B8B8',
    grayLight: '#f5f5f5',
    grayAvatar: '#bdbdbd',
    grayTextLight: '#d2d2d2',
    grayTextDark: '#727272',
    badge: '#e74c3c',
  },

  primary: {
    lightBorder: lightBorder,
    lightBackground: lightBackground,
    light: primaryMainColor,
    main: primaryMainColor,
    dark: hoverPrimary,
    lighter: secondaryMainColor,
    contrastText: white,
    blueShadow: primaryMainColorShadow,
    shadow: primaryShadow,
    darkShadow: primaryDarkShadow,
  },
  secondary: {
    light: '#30B56B',
    main: '#30B5A8',
    dark: '#00A178',
    lighter: secondaryLight,
    contrastText: white,
  },
  bot: {
    lightBackground: '#f1fbf7',
    buttonBackground: '#33b187',
    darkBackground: '#d3f7ea',
    filterBackground: '#028b8b',
    textBorderLight: '#e3e8fb',
    textLight:'#777777',
    textItalics:'#505050'
  },
  error: {
    main: '#e74c3c',
  },
  background: {
    default: white,
  },
  icon: {
    primary: iconPrimary,
    hover: iconHover,
  },
  gradient: {
    // main: 'linear-gradient(103deg, #29ABE2 0%, #06C66C 100%)'
    main:
      'transparent linear-gradient(284deg, #35b376 0%, #2aabde 100%) 0% 0% no-repeat padding-box',
  },
  home: {
    title: '#0B54A1',
    border: '#b1bbe4',
    heading: '#0B54A1',
    subheading: '#008B8B',
  },
  navbar: {
    border: '#2B43A6',
    grayBackground: '#F0F2FD',
    avatar: '#b1bbe4',
    button: '#3AB09E',
    breadcrumb: '#9E9E9E',
    borderDark: '#C9D2F680',
  },
  biologics: {
    textPrimary: '#1D262D',
    gradient: 'linear-gradient(90deg, #29ABE2 0%, #39B54A 100%)',
    textSecondary: '#B1BBE4',
    radialGraphText: '#182B7F',
    pieText: '#0B54A1',
    primary: '#0E83DC',
    secondary: '#40C4FF',
    label: '#1FBDCA',
  },
  texts: {
    placeholder: '#646774',
  },
  backgrounds: {
    dark: '#101328',
    light: '#282d4f',
    main: '#F2F7F7',
  },
  buttons: {
    purple: '#a593f2',
  },
  adminHome: {
    grayText: '#aaadb0',
    greenText: '#008B8B',
    primaryBlack: '#3B3B3B',
    paperBackground: '#f5f8fe',
  },
  review: {
    // label: '#1C2D59',
    label: '#d0d5eb',
  },
  variants: {
    title: '#030303',
  },
  tabs: {
    grayLight: '#BFC2C2',
    grayText: '#707070',
    shadow: '#00000029',
  },
  gradient: {
    main: 'linear-gradient(102deg, #29ABE2 0%, #06C66C 100%)',
  },
  regulatory: {
    aiHeading: '#6A6A6A',
    nda: '#EA5252',
    tabShadow: '#00000029',
    pdfsidebar: '#4B4B4B',
    darkGreen: '#289D78',
    documentLink: '#4172D9',
    TabsSelectColor: '#6C9BFD',
    labelCompare: '#12815E',
    blue: '#264EEE',
    lightGreen: '#26AE8C',
    lighterGreen: '#F1F5F8',
    green: '#06C66C',
  },
  cards: {
    red: '#ea5252',
    grayDark: '#464255',
    grayLight: '#7E7E7E',
    grayAlternate: '#B2B2B2',
    grayDescription: '#8B8B8B',
    grayText: '#6D7D8A',
    blue: '#6868FA',
    shadow: '#00000008',
    shadowSecondary: 'rgba(99, 99, 99, 0.2)',
    avatar: '#289D78',
    green: '#3AB09E',
    background: '#F2F7F7',
  },
  adcomm: {
    lightGreen: '#c8f6e4',
    lightGray: '#e8e8e8',
    green: '#12815E',
    gray: '#707070',
    blue: '#4A4EC6',
    dateBlue: '#264EEE',
    lighterGray: '#F1F5F8',
    linkBlue: '#4524CB',
    grayBorder: '#B2B2B2',
    searchGray: '#B1BBE4',
    upcomingGray: '#9c9da6',
    completedGreen: '#289D78',
    objectiveGreen: '#06C66C',
    blueHeading: '#6868FA',
    linearBar: '#C9D2F6',
    dosing: '#29ABE2',
    efficacy: '#6C9BFD',
    clinicalPractise: '#30B5A8',
    policy: '#48E0A6',
    others: '#AB54DB',
    summaryGreen: '#C7F6E4',
    warningRed: '#fd3030',
  },
  datagrid: {
    headerText: secondaryMainColor,
    dataText: '#6D7D8A',
  },
  aria: {
    darkGreen: '#289D78',
  }
};
