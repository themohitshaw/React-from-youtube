import styles from "./Button_Area.module.css"
import Button_Ele from "./Button_Ele"

const Button_Area =({ buttons })=>{
    return <div className={styles.buttonArea}>
        <Button_Ele button={buttons}></Button_Ele>
    </div>
}

export default Button_Area