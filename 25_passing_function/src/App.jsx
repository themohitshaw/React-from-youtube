import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Container from "./components/Container"

import Heading from "./components/Heading"
import FoodItems from "./components/FoodItems"
// import Description from "./components/Description"

import InputItem from "./components/InputItem"

function App(){
  const foods = ["Rice" , "Roti" , "Dal" , "Ghee" , "Salad"]

  const onchange=(event)=>{
    console.log(event.target.value)
  }
  return <>
  <Container>
    <Heading></Heading>
    <InputItem onchange={onchange}></InputItem>
    <FoodItems fooditems = {foods}></FoodItems>
  </Container>

  {/* <Container>
    <Description></Description>
  </Container> */}

  
  </>
}
export default App