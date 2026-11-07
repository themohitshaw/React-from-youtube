import styles from "./FoodItems.module.css"

const FoodItems = ({foods})=>{
    return <>
        <ul className={`${styles.ulTag} list-group`}>
            {foods.map(food => <li className={`${styles.liTag}  list-group-item`}>{ food }</li>)}
        </ul>
    </>
}

export default FoodItems