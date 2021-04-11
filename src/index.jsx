import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import createStore from "./reducks/store/store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConnectedRouter} from "connected-react-router";
import * as History from "history";

const history = History.createBrowserHistory();
// 下記のcreateStore（）を実行することでstoreが作られる。
// createStore()で実行した結果を定数store内に入れてあげる
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// description

// Provider(react-reduckの中にあるコンポーネント)
// １、propsnにstoreを渡す　→　（Providerで）ラップしたコンポーネントにstoreの情報
// ２、Reactコンポーネント内でreact-reduxのconnect関数を使えるようにする　→　ReactとReduxを接続してstore変更できるように
