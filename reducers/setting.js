import {
  ENABLE_SETTINGS,
  DISABLE_SETTINGS,
  SET_ACTIVE_TINT_COLOR,
  SAVE_SETTINGS,
  SAVE_SETTINGS_SUCCESS,
  GET_SETTINGS,
  GET_SETTINGS_SUCCESS
} from "../actionTypes/setting";

export default function settingsReducer(
  state = {
    enable: false,
    activeTintColor: null,
    inactiveTintColor: "grey",
    isLoading: false
  },
  action
) {
  switch (action.type) {
    case ENABLE_SETTINGS:
      return { ...state, enable: true };
    case DISABLE_SETTINGS:
      return { ...state, enable: false };
    case SET_ACTIVE_TINT_COLOR:
      return { ...state, activeTintColor: action.color };
    case SAVE_SETTINGS:
      return { ...state, isLoading: true };
    case SAVE_SETTINGS_SUCCESS:
      return { ...state, isLoading: false };
    case GET_SETTINGS:
      return { ...state, isLoading: true };
    case GET_SETTINGS_SUCCESS:
      return { ...state, isLoading: false, ...action.settings };
    default:
      return state;
  }
}
