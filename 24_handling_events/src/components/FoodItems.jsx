import styles from "./FoodItems.module.css"

import Item from "./Item"

const FoodItems = ({fooditems})=>{
    return <>
        <ul className={`${styles.ulTag} list-group`}>
            {fooditems.map(food => <Item key = {food} food = {food} ></Item>)}
        </ul>
    </>
}

export default FoodItems