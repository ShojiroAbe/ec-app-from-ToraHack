const initialState = {
  // このカテゴリーごとにフォルダを作っていくのが管理しやすい
  users: {
    isSignedIn: false,
    role: "",
    uid: "",
    username: ""
  },
  products: {
    list: []
  }
};

export default initialState
