import { POPUP_OPEN } from "../ActionType";
import { POPUP_CLOSE } from "../ActionType";

const initialState = {
  popup: false,
};

export const PopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPUP_OPEN:
      return {
        ...state,
        popup: action.payload,
      };
    case POPUP_CLOSE:
      return {
        ...state,
        popup: action.payload,
      };
    default:
      return state;
  }
};
