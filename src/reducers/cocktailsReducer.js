const initial_state = {
  categories: [],
};

export default (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LIST_CATEGORIES":
      return { ...state, categories: payload };
    default:
      return state;
  }
};
