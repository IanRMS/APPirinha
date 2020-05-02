import { toast } from "react-toastify";
import Api from "../services/api";

//LISTAR CATEGORIAS
export const get_categories = () => async (dispatch) => {
  try {
    const url = "list.php?c=list";
    const { drinks } = await Api.get(url);
    dispatch({ type: "LIST_CATEGORIES", payload: drinks });
  } catch (e) {
    toast.error("Não foi possível listar as categorias.");
  }
};

//SELECIONAR CATEGORIAS
export const set_category = (category) => (dispatch) => {
  dispatch({ type: "SET_CATEGORY", payload: category });
};

//FILTRAR LISTA POR CATEGORIA
export const list_by_category = (category) => async (dispatch) => {
  try {
    const url = `filter.php?c=${category}`;
    const { drinks } = await Api.get(url);
    dispatch({ type: "LIST_BY_CATEGORY", payload: drinks });
  } catch (e) {
    toast.error("Não foi possível listar os drinks");
  }
};

//SELECIONAR DRINK
export const select_drink = (id) => async (dispatch) => {
  try {
    const url = `lookup.php?i=${id}`;
    const { drinks } = await Api.get(url);
    dispatch({ type: "SELECT_DRINK", payload: drinks[0] });
  } catch (e) {
    toast.error("Não foi possível detalhar o drink.");
  }
};

//BUSCAR DRINK PELO NOME
export const search_drink = (search) => async (dispatch) => {
  try {
    const url = `search.php?s=${search}`;
    const { drinks } = await Api.get(url);
    dispatch({ type: "SEARCH_DRINKS", payload: drinks });
  } catch (e) {
    toast.error("Não foi possível realizar a busca");
  }
};

//BUSCAR DRINK ALEATÓRIO
export const random_drink = () => async (dispatch) => {
  try {
    const url = "random.php";
    const { drinks } = await Api.get(url);
    dispatch({ type: "HANDLE_RANDOM", payload: drinks[0].idDrink });
  } catch (e) {
    toast.error("Não foi possível buscar um drink.");
  }
};
