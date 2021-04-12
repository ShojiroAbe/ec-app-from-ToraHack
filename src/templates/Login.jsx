import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {push} from "connected-react-router";
import {signInAction} from "../reducks/users/actions";

const Login = () => {
  const dispatch = useDispatch();
  const selecter = useSelector(state=>state);

  console.log(selecter.router)
  console.log(selecter.users)

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => {
        dispatch(signInAction({ uid: "00001", username: "torahack" }));
        dispatch(push("/"))
      }}>
        ログイン
      </button>
    </div>
  )
}

export default Login;
