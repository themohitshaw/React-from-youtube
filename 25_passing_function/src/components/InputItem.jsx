import styles from "./InputItem.module.css"

const InputItem=({onchange})=>{

    return  <input type="text" placeholder="Enter food here..." className={styles.input} onChange={onchange} />
}

export default InputItem