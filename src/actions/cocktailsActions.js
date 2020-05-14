import { toast } from "react-toastify";

import Api from "../services/api";
import * as types from "./actionTypes";

//LISTAR CATEGORIAS
export const get_categories = () => async (dispatch) => {
  dispatch(loading(true));
  try {
    const url = "list.php";
    const { drinks } = await Api.get(url, { params: { c: "list" } });
    if (!drinks) toast.error("Não foi possível listar as categorias.");
    dispatch({ type: types.LIST_CATEGORIES, payload: drinks });
  } catch (e) {
    toast.error("Não foi possível listar as categorias.");
  } finally {
    dispatch(loading(false));
  }
};

//SELECIONAR CATEGORIAS
export const set_category = (category) => (dispatch) => {
  dispatch({ type: types.SET_CATEGORY, payload: category });
};

//FILTRAR LISTA POR CATEGORIA
export const list_by_category = (category) => async (dispatch) => {
  dispatch(loading(true));
  try {
    const url = `filter.php`;
    const { drinks } = await Api.get(url, { params: { c: category } });
    if (!drinks) toast.error("Não foi possível listar os drinks");
    dispatch({ type: types.LIST_BY_CATEGORY, payload: drinks });
  } catch (e) {
    toast.error("Não foi possível listar os drinks");
  } finally {
    dispatch(loading(false));
  }
};

//SELECIONAR DRINK
export const select_drink = (id) => async (dispatch) => {
  dispatch(loading(true));
  try {
    const url = `lookup.php`;
    const { drinks } = await Api.get(url, { params: { i: id } });
    dispatch({ type: types.SELECT_DRINK, payload: drinks[0] });
  } catch (e) {
    toast.error("Não foi possível detalhar o drink.");
  } finally {
    dispatch(loading(false));
  }
};

//BUSCAR DRINK PELO NOME
export const search_drink = (search) => async (dispatch) => {
  dispatch(loading(true));
  try {
    const url = `search.php`;
    const { drinks } = await Api.get(url, { params: { s: search } });
    if (!drinks)
      toast.error("Não foi possível realizar a busca, tente novamente");
    dispatch({ type: types.SEARCH_DRINKS, payload: drinks });
  } catch (e) {
    toast.error("Não foi possível realizar a busca, tente novamente");
  } finally {
    dispatch(loading(false));
  }
};

//BUSCAR DRINK ALEATÓRIO
export const random_drink = () => async (dispatch) => {
  dispatch(loading(true));
  try {
    const url = "random.php";
    const { drinks } = await Api.get(url);
    if (!drinks) toast.error("Não foi possível buscar um drink.");
    dispatch({ type: types.HANDLE_RANDOM, payload: drinks[0].idDrink });
  } catch (e) {
    toast.error("Não foi possível buscar um drink.");
  } finally {
    dispatch(loading(false));
  }
};

//LOADING
export const loading = (value) => ({ type: types.LOADING, payload: value });
