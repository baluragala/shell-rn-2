import produce from "immer";

const INITIAL_STATE = {
  isLoading: false,
  isRefreshing: false,
  products: [],
  nextPage: 1,
  limit: 10,
  loadMore: true
};
export default function productReducer(state = INITIAL_STATE, action) {
  const nextState = produce(state, draftState => {
    switch (action.type) {
      case "GET_PRODUCTS":
        draftState.isLoading = true;
        break;
      case "REFRESH":
        draftState.isRefreshing = true;
        break;
      case "REFRESH_SUCCESS":
        draftState.isRefreshing = false;
        draftState.products = action.products;
        draftState.nextPage = 2;
        break;
      case "GET_PRODUCTS_SUCCESS":
        draftState.isLoading = false;
        draftState.products.push(...action.products);
        draftState.nextPage++;
        draftState.loadMore =
          action.products.length !== draftState.limit ? false : true;
        break;
      case "GET_PRODUCTS_FAILURE":
        draftState.isLoading = false;
        draftState.error = action.error;
        break;
    }
  });

  return nextState;
}
