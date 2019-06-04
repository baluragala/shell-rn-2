import { put, select } from "redux-saga/effects";
import {
  getProductsSuccessActionCreator,
  getProductsFailureActionCreator,
  refreshSuccessActionCreator,
  refreshFailureActionCreator
} from "../actions/product";

export function* getProducts(action) {
  try {
    let productsResponse = yield fetch(
      `http://localhost:4000/products?_page=${action.page}&_limit=${
        action.limit
      }`
    );
    let products = yield productsResponse.json();
    yield put(getProductsSuccessActionCreator(products));
  } catch (err) {
    yield put(getProductsFailureActionCreator(err));
  }
}

export function* refresh() {
  try {
    let productsResponse = yield fetch(
      `http://localhost:4000/products?_page=${1}&_limit=${10}`
    );
    let products = yield productsResponse.json();
    yield put(refreshSuccessActionCreator(products));
  } catch (err) {
    yield put(refreshFailureActionCreator(err));
  }
}
