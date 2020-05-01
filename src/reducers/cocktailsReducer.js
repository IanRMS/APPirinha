const initial_state = {
  categories: [],
  category: null,
  listByCategory: [],
  idDrink: "",
  drink: {},
  searchList: [],
};

export default (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LIST_CATEGORIES":
      return { ...state, categories: payload };
    case "SET_CATEGORY":
      return { ...state, category: payload };
    case "LIST_BY_CATEGORY":
      return { ...state, listByCategory: payload };
    case "SELECT_DRINK":
      return { ...state, drink: payload };
    case "SEARCH_DRINKS":
      return { ...state, searchList: payload };
    default:
      return state;
  }
};
