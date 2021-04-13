import {signInAction} from "./actions";
import {push} from "connected-react-router";

export const signIn = () => {
  return async (dispatch, getState) => {
    // getState()はreduxのメソッド
    //　現在のreduxのstate情報を取ってくる
    const state = getState()
    const isSignedIn = state.users.isSignedIn

    if (!isSignedIn) {
      const url ="https://api.github.com/users/ShojiroAbe"

      const response = await fetch(url)
                      .then(res=>res.json())
                      .catch(()=>null)

      const username = response.login

      dispatch(signInAction({
        isSignedIn: true,
        uid: "00001",
        username: username
      }))
      dispatch(push("/"))
    }
  }
}
