import {createSelector} from "reselect";

// 下記の（state）内にはstore情報が入っており、usersSelectorは最終的にはstate.usersの情報を返す
const usersSelector = (state) => state.users;

export const getUserId = createSelector(
  // usersSelectorの中には上記のstate.usersが返ってきてる
  // state=>state.uidのstateはusers
  [usersSelector],
  state => state.uid
)

export const getUserName = createSelector(
  [usersSelector],
  state => state.username
)
