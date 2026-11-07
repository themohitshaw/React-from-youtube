import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Container from "./components/Container"

import Heading from "./components/Heading"
import FoodItems from "./components/FoodItems"
import Description from "./components/Description"

function App(){
  const foods = ["Rice" , "Roti" , "Dal" , "Ghee" , "Salad"]
  return <>
  <Container>
    <Heading></Heading>
    <FoodItems foods = {foods}></FoodItems>
  </Container>
  <Container>
    <Description></Description>
  </Container>
  </>
}
export default App