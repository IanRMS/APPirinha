import Api from "../services/api";

export const get_categories = () => async (dispatch) => {
  try {
    const url = "list.php?c=list";
    const { drinks } = await Api.get(url);
    console.log(drinks);
    dispatch({ type: "LIST_CATEGORIES", payload: drinks });
  } catch (e) {
    console.log(e);
  }
};

export const set_category = (category) => (dispatch) => {
  dispatch({ type: "SET_CATEGORY", payload: category });
};

export const list_by_category = (category) => async (dispatch) => {
  try {
    const url = `filter.php?c=${category}`;
    const { drinks } = await Api.get(url);
    console.log(drinks);
    dispatch({ type: "LIST_BY_CATEGORY", payload: drinks });
  } catch (e) {
    console.log(e);
  }
};

export const select_drink = (id) => async (dispatch) => {
  try {
    const url = `lookup.php?i=${id}`;
    const { drinks } = await Api.get(url);
    console.log(drinks[0]);
    dispatch({ type: "SELECT_DRINK", payload: drinks[0] });
  } catch (e) {
    console.log(e);
  }
  // dispatch({ type: "SELECT_DRINK", payload: id });
};
