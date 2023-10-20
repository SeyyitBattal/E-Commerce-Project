export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETHCING",
  fetched: "FETCHED",
  failed: "FAILED",
};

const productStateInitial = {
  productList: [],
  totalProductCount: "",
  pageCount: "",
  activePage: "",
  fetchState: FETCH_STATES.notFetched,
};
