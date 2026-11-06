import styles from "./Button_Ele.module.css"

const Button_Ele =({ button })=>{
    return  <>
    {button.map(item => <button className={styles.button}>{item}</button>)}
    </>
}

export default Button_Ele