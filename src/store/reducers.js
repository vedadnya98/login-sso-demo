import actions from './actions';

const reducers = (state, action) => {
  switch (action.type) {
    case actions.SET_LOADING: {
      return {
        ...state,
        loading: action.value,
      };
    }
    case actions.SET_ADVANCE_SEARCH: {
      return {
        ...state,
        advanceSearch: action.value,
      };
    }
    case actions.SET_CART_ITEMS: {
      return {
        ...state,
        cartItems: action.value,
      };
    }
    case actions.SET_PDF_MESSAGE: {
      return {
        ...state,
        pdfMessage: action.value,
      };
    }
    case actions.SET_GRAPH_TYPE: {
      return {
        ...state,
        graphType: [...state.graphType, action.value],
      };
    }
    case actions.SET_CARD_DETAILS: {
      return {
        ...state,
        cardDetails: action.value,
      };
    }
    case actions.SET_USER_STUB: {
      return {
        ...state,
        userStub: action.value,
      };
    }
    case actions.SET_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: action.value,
      };
    }
    case actions.SET_PATENT_EXPANSION: {
      return {
        ...state,
        patentExpansion: action.value,
      };
    }
    case actions.SET_APPLICATION_CONTENT: {
      return {
        ...state,
        applicationContent: [...state.applicationContent, action.value],
      };
    }
    case actions.SET_TIMELINE: {
      return {
        ...state,
        timelineData: [...state.timelineData, action.value],
      };
    }
    case actions.SET_MODULE: {
      return {
        ...state,
        module: action.value,
      };
    }
    case actions.SET_REPORT: {
      return {
        ...state,
        report:
          state.cartItems === 0
            ? action.value
            : [...state.report, action.value],
      };
    }
    case actions.SET_ALERT: {
      return {
        ...state,
        alert: {
          ...action.value,
        },
      };
    }
    case actions.SET_DB: {
      return {
        ...state,
        db: action.value,
      };
    }
    case actions.SET_EXTENDED_CARD: {
      return {
        ...state,
        extendedCard: action.value,
      };
    }
    case actions.SET_BOT: {
      return {
        ...state,
        bot: action.value,
      };
    }
    case actions.SET_ADCOMMCOMMITTEE: {
      return {
        ...state,
        adcommCommittee: action.value,
      };
    }

    case actions.SET_TREE_DATA: {
      return {
        ...state,
        treeData: action.value,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducers;
