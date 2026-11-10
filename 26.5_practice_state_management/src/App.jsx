import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";

import Heading from "./components/Heading";
import FoodItems from "./components/FoodItems";
import InputItem from "./components/InputItem";
import { useState } from "react";

function App() {
  let [foods, setFoods] = useState(["Rice", "Roti", "Dal", "SSS", "Salad"]);

  const onKeyDown = (event) => {
    // console.log(event)
    if (event.key === "Enter"){
      let newFoodItem = event.target.value
      let newFoodItems = [...foods , newFoodItem]
      setFoods(newFoodItems)
      event.target.value = ''
    }
  };
  return (
    <>
      <Container>
        <Heading></Heading>
        <InputItem handleKeyDown={onKeyDown}></InputItem>
        <FoodItems fooditems={foods}></FoodItems>
      </Container>
    </>
  );
}
export default App;
