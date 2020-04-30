import Api from "../services/api

export const get_categories = () => async (dispatch) => {
  try {
    const url = "list.php?c=list";
    const { data } = await Api.get(url);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
