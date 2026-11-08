import styles from "./Item.module.css"

const Item = ( {food , clickbyevent} ) =>{
    const click_event=(event)=>{
        console.log(event)
        alert(food + " order confirmed")
    }
    return <>
    <li className={`${styles.liTag}  list-group-item`}>
        <span> { food } </span>
        <button type="button" className= {`${styles.button} btn-solid theme-info`} onClick={clickbyevent}>Buy</button>
    </li>

    </>
}

export default Item