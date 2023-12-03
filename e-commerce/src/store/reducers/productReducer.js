import { productActions } from "../actions/productActions";

export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETHCING",
  fetched: "FETCHED",
  failed: "FAILED",
};

const productStateInitial = {
  productList: [],
  loading: false,
  totalProductCount: 0,
  pageCount: 1,
  activePage: 1,
  fetchState: FETCH_STATES.notFetched,
};

export const productReducer = (state = productStateInitial, action) => {
  switch (action.type) {
    case productActions.set:
      return {
        ...state,
        productList: action.payload,
      };

    case productActions.clear:
      return productStateInitial;

    case productActions.add:
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };

    case productActions.delete:
      return {
        ...state,
        productList: state.productList.filter(
          (pro) => pro.id !== action.payload
        ),
      };

    case productActions.setLoading:
      return { ...state, loading: action.payload };

    case productActions.setFetchState:
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
};
