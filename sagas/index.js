import { takeLatest, all } from "redux-saga/effects";
import { getProducts, refresh } from "./product";
import { SAVE_SETTINGS, GET_SETTINGS } from "../actionTypes/setting";
import { saveSettings, getSettings } from "./settings";

export default function* rootSaga() {
  yield all([
    takeLatest("GET_PRODUCTS", getProducts),
    takeLatest("REFRESH", refresh),
    takeLatest(SAVE_SETTINGS, saveSettings),
    takeLatest(GET_SETTINGS, getSettings)
  ]);
}
