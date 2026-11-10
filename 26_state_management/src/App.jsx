import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Container from "./components/Container"

import Heading from "./components/Heading"
import FoodItems from "./components/FoodItems"
import InputItem from "./components/InputItem"
import { useState } from "react"

function App(){
  const foods = ["Rice" , "Roti" , "Dal" , "Ghee" , "Salad"]

  let textStateArr = useState("Your foods are here...")   //There are two values in the array and we pass a initial value like - Your foods are here...

  // let [textToShow  , setTextState] = useState("Writ something that display first") //We can write like this

  // let textStateVal = textStateArr[0] // Store the first value

  let textToShow = textStateArr[0]
  let setTextState = textStateArr[1]  // store the second element

  const onchange=(event)=>{
    setTextState(event.target.value)
  }
  return <>
  <Container>
    <Heading></Heading>
    <InputItem onchange={onchange}></InputItem>
    <p>{textToShow}</p>
    <FoodItems foods = {foods}></FoodItems>
  </Container>
  </>
}
export default App