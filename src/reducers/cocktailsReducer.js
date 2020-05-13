import * as types from "../actions/actionTypes";

const initial_state = {
  categories: [],
  category: null,
  listByCategory: [],
  idDrink: "",
  drink: {},
  searchList: [],
  randomId: null,
  loading: false,
};

export default (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LIST_CATEGORIES:
      return { ...state, categories: payload };
    case types.SET_CATEGORY:
      return { ...state, category: payload };
    case types.LIST_BY_CATEGORY:
      return { ...state, listByCategory: payload };
    case types.SELECT_DRINK:
      return { ...state, drink: payload };
    case types.SEARCH_DRINKS:
      return { ...state, searchList: payload };
    case types.HANDLE_RANDOM:
      return { ...state, randomId: payload };
    case types.LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
