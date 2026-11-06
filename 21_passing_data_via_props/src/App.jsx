import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import FoodItem from "./components/FoodItem";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems =[]
  let foodItems = ["Rice", "Roti", "Dal", "Ghee", "Salad"];


  return (
    <>
      <h1 className="kg-heading">Healthy Foods</h1>
      <ErrorMessage foodItems = {foodItems}></ErrorMessage>
      <FoodItem foodItems = {foodItems}></FoodItem>
    </>
  );
}

export default App;
