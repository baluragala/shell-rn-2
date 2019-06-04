export const getProductsAction = {
  type: "GET_PRODUCTS"
};
export const getProductsActionCreator = (page, limit) => ({
  type: "GET_PRODUCTS",
  page,
  limit
});
export const getProductsSuccessActionCreator = products => ({
  type: "GET_PRODUCTS_SUCCESS",
  products
});
export const getProductsFailureActionCreator = error => ({
  type: "GET_PRODUCTS_FAILURE",
  error
});

export const refresh = {
  type: "REFRESH"
};

export const refreshSuccessActionCreator = products => ({
  type: "REFRESH_SUCCESS",
  products
});
export const refreshFailureActionCreator = error => ({
  type: "REFRESH_FAILURE",
  error
});
