import Item from "./Item";

const FoodItem = ({ foodItems }) =>{

    // let foodItems =[]
    // let foodItems = ["Rice", "Roti", "Dal", "Ghee", "Salad"];

    return (
        <ul class="list-group kg-items">
        {foodItems.map((item) => (
          <Item key = {item} foodItem = {item} ></Item>
        ))}
        </ul>
    );
}

export default FoodItem