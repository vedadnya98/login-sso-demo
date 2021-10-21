import React, { createContext, useReducer } from 'react';
import reducers from './reducers';

const initialState = {
  loading: false,
  cartItems: 0,
  advanceSearch: null,
  report: [],
  pdfMessage: 'Nothing has been added to the report',
  graphType: [],
  searchTerm: null,
  cardDetails: [],
  applicationContent: [],
  patentExpansion: false,
  userStub: null,
  module: 'core',
  alert: {},
  db: 'us',
  timelineData: [],
  extendedCard: {},
  bot: false,
  adcommCommittee: 'ALL',
  treeData: {},
};

const Store = createContext(initialState);
const { Provider } = Store;

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default Store;
