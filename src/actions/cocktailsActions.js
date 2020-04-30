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
