import React, {useCallback, useState} from "react"
import {TextInput, SelectBox} from "../components/UIkit"

const ProductEdit = () => {

  const [name, setName] = useState(""),
        [description, setDescription] = useState(""),
        [category, setCategory] = useState(""),
        [gender, setGender] = useState(""),
        [price, setPrice] = useState("");

  const inputName = useCallback((event) => {
    setName(event.target.value)
  }, [setName])
  const inputDescription = useCallback((event) => {
    setDescription(event.target.value)
  }, [setDescription])
  const inputPrice = useCallback((event) => {
    setPrice(event.target.value)
  }, [setPrice])

  const categories = [
    {id: "a", name: "AAAA"},
    {id: "b", name: "BBBB"},
    {id: "c", name: "CCCC"},
  ]

  const genders = [
    {id: "d", name: "DDDD"},
    {id: "e", name: "EEEE"},
    {id: "f", name: "FFFF"},
  ]

  return(
    <section>
      <h2 className="u-text__headline u-text-center">商品の登録・編集</h2>
      <div className="c-section-container">
        <TextInput
          fullWidth={true} label={"商品名"}　multiline={false} required={true}
          onChange={inputName} rows={1} value={name} type={"text"}
        />
        <TextInput
          fullWidth={true} label={"商品説明"}　multiline={true} required={true}
          onChange={inputDescription} rows={5} value={description} type={"text"}
        />
        <SelectBox
          label={"カテゴリー"} required={true} options={categories} select={setCategory} value={category}
        />
        <SelectBox
          label={"性別"} required={true} options={genders} select={setGender} value={gender}
        />
        <TextInput
          fullWidth={true} label={"商品名"}　multiline={false} required={true}
          onChange={inputPrice} rows={1} value={price} type={"number"}
        />
      </div>
    </section>
  )
}

export default ProductEdit
