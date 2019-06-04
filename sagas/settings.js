import { SecureStore } from "expo";
import { put } from "redux-saga/effects";
import {
  saveSettingsSuccessAC,
  getSettingsSuccessAC
} from "../actions/setting";

export function* saveSettings(action) {
  yield SecureStore.setItemAsync("SETTINGS", JSON.stringify(action.settings));
  yield put(saveSettingsSuccessAC());
}

export function* getSettings() {
  let settings = yield SecureStore.getItemAsync("SETTINGS");
  yield put(getSettingsSuccessAC(JSON.parse(settings)));
}
