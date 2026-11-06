import styles from "./Item.module.css"

const Item = (props) => {
    return <li  className={`${styles['kg-item']} list-group-item kg-item `}>{props.foodItem}</li>
}
export default Item