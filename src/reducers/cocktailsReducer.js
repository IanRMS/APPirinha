const initial_state = {
  categories: [],
  category: "",
  listByCategory: [],
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
    default:
      return state;
  }
};
