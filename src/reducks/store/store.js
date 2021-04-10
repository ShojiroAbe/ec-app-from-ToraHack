// ※createStoreをreduxCreateStoreという名前を便宜上使用
import { createStore as reduxCreateStore, combineReducers } from "redux";
import {UserReducer} from "../users/reducers";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      users: UserReducer
    })
  )
}
