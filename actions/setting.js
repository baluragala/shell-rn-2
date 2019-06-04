import {
  ENABLE_SETTINGS,
  DISABLE_SETTINGS,
  SET_ACTIVE_TINT_COLOR,
  SAVE_SETTINGS,
  SAVE_SETTINGS_SUCCESS,
  GET_SETTINGS,
  GET_SETTINGS_SUCCESS
} from "../actionTypes/setting";

export function enableSettingsAC() {
  return {
    type: ENABLE_SETTINGS
  };
}

export function disableSettingsAC() {
  return {
    type: DISABLE_SETTINGS
  };
}

export function setActiveTintColorAC(color) {
  return {
    type: SET_ACTIVE_TINT_COLOR,
    color
  };
}

export function saveSettingsAC(settings) {
  return {
    type: SAVE_SETTINGS,
    settings
  };
}

export function saveSettingsSuccessAC() {
  return {
    type: SAVE_SETTINGS_SUCCESS
  };
}

export function getSettingsAC() {
  return {
    type: GET_SETTINGS
  };
}

export function getSettingsSuccessAC(settings) {
  return {
    type: GET_SETTINGS_SUCCESS,
    settings
  };
}
