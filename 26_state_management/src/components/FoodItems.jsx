import styles from "./FoodItems.module.css"

import Item from "./Item"

const FoodItems = ({foods})=>{
    return <>
        <ul className={`${styles.ulTag} list-group`}>
            {foods.map(food => <Item key = {food} food = {food} clickbyevent={() => alert(`${food} bought`)} ></Item>)}
        </ul>
    </>
}

export default FoodItems