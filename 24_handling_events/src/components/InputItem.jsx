import styles from "./InputItem.module.css"

const InputItem=()=>{
    const event_on_change =(event)=>{
        console.log(event.target.value)
    }
    return  <input type="text" placeholder="Enter food here..." className={styles.input} onChange={(event)=>event_on_change(event)}/>
}

export default InputItem