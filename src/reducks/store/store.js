// ※createStoreをreduxCreateStoreという名前を便宜上使用
import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux";
import {UserReducer} from "../users/reducers";
import {connectRouter, routerMiddleware} from "connected-react-router"

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UserReducer,
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
}
