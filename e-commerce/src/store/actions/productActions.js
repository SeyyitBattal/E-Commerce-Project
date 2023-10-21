import { toast } from "react-toastify";
import { FETCH_STATES } from "../reducers/productReducer";
import { api } from "../../api/api";

export const productActions = Object.freeze({
  set: "SET_PRODUCTS",
  clear: "CLEAR_PRODUCTS",
  add: "ADD_PRODUCT",
  delete: "DELETE_PRODUCT",
  setLoading: "SET_PRODUCTS_LOADING",
  setFetchState: "SET_FETCH_STATE",
});

export const loadProductsActionCreator = () => (dispatch, getState) => {
  dispatch({ type: productActions.setLoading, payload: true });
  dispatch({
    type: productActions.setFetchState,
    payload: FETCH_STATES.fetching,
  });

  api
    .get("products")
    .then((res) => {
      dispatch({ type: productActions.set, payload: res.data });
      dispatch({
        type: productActions.setFetchState,
        payload: FETCH_STATES.fetched,
      });
    })
    .catch((err) => {
      toast.error(`Hata mesajı: ${err.message}`);
    })
    .finally(() => {
      dispatch({ type: productActions.setLoading, payload: false });
    });
};

export const deleteProductActionCreator = (productId) => (dispatch) => {
  productId &&
    api
      .delete(`products/${productId}`)
      .then((res) => {
        dispatch({ type: productActions.delete, payload: productId });
      })
      .catch((err) => {
        toast.error(`Hata mesajı: ${err.message}`);
      });
};
