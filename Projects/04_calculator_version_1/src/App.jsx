import "bootstrap/dist/css/bootstrap.min.css"

import styles from "./App.module.css"


import Display from "./components/Display"
import Button_Area from "./components/Button_Area"

function App(){

  let buttons = ["C" , "AC" , "00" , "0" ,"7","8" , "9" , "+" ,"4", "5" , "6" , "-" , "1","2" , "3" , "X" , "/" , "%" , "." , "=" ]
  return <div className={styles.calculator}>
      <Display></Display>
      <Button_Area buttons = {buttons}></Button_Area>
  </div>
}

export default App