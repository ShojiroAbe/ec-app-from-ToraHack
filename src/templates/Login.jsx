import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {push} from "connected-react-router";

const Login = () => {
  const dispatch = useDispatch();
  const selecter = useSelector(state=>state);

  console.log(selecter.router)
  console.log(selecter.users)

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(push("/"))}>
        ログイン
      </button>
    </div>
  )
}

export default Login;