import * as Actions from "./actions"
import initialState from "../store/initialState"

// 第一引数にstate,第二引数にactionがreturnした値
export const ProductsReducer = (state = initialState.products, action) => {
  switch(action.type) {
      default:
        return state
  }
};
