import { CHANGE_AUTH } from "../actions/types";

export default function authReducer(state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
    default:
      return state;
  }
}