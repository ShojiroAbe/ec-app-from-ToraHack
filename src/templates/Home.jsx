import React from "react";
import {getUserId, getUserName} from "../reducks/users/selectors";
import {useSelector} from "react-redux";

const Home = () => {
  // 下記の記述でredux全体のstateの情報(store)を取ってくる（usersSelector）。
  const selector = useSelector(state=>state);
  const uid = getUserId(selector)
  const username = getUserName(selector)

  return(
    <div>
      <h2>Home</h2>
      <p>{uid}</p>
      <p>{username}</p>
    </div>
  )
}

export default Home;
