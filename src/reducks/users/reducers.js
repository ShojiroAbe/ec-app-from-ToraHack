import * as Actions from "./actions"
import initialState from "../store/initialState"

// 第一引数にstate,第二引数にactionがreturnした値
export const UserReducer = (state = initialState.users, action) => {
  switch(action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
    case Actions.SIGN_OUT:
      return {
        ...state,
        ...action.payload
      };
      default:
        return state
  }
};
