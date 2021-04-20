// firebase 内のサービスのエントリーポイント
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import "firebase/functions"
import {firebaseConfig} from "./config";

firebase.initializeApp(firebaseConfig);
//インポートしてきたメソッドの実行結果を定数にして使いやすいようにする
export const auth = firebase.auth();
export const db = firebase.firestore()
export const storage = firebase.storage();
export const functions = firebase.functions();
export const FirebaseTimestamp = firebase.firestore.Timestamp;
