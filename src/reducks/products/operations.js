import {db, FirebaseTimestamp} from "../../firebase";
import {push} from "connected-react-router";

const productsRef = db.collection("products");

export const saveProduct = (name, description, gender, category, price) => {
  return async(dispatch) => {
    const timestamp = FirebaseTimestamp.now();

    const date = {
      category: category,
      description: description,
      gender: gender,
      name: name,
      price: parseInt(price, 10),
      updated_at: timestamp
    }

    const ref = productsRef.doc();
    const id = ref.id
    date.id = id
    date.created_at = timestamp

    return productsRef.doc(id).set(date)
      .then(() => {
        dispatch(push("/"))
      }).catch((error) => {
        throw new Error(error)
      })
  }
}
