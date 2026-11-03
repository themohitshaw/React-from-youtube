import AppName from "./components/App_name"
import AddToDo from "./components/Add_ToDo"
import Todoitem1 from "./components/Todo_item1"
import Todoitem2 from "./components/Todo_item2"

import "./App.css"

function App(){
  // return <div>
  //   <center class = "todo-container"><h1><b>TODO App</b></h1></center>
  //   <div class="container text-center">
  //     <div class="row">
  //       <div class="col-4"><input type="text" placeholder="Enter TODO here" /></div>
  //       <div class="col-4"><input type="date" /></div>
  //       <div class="col-2"><button type="button" class="btn-solid theme-success">Add</button></div>
  //     </div>
  //   </div>
  //   <div class="container text-center">
  //     <div class="row">
  //       <div class="col-4">Buy Milk</div>
  //       <div class="col-4">01/01/2026</div>
  //       <div class="col-2"><button type="button" class="btn-solid theme-danger">Delete</button></div>
  //     </div>
  //   </div>
  //   <div class="container text-center">
  //     <div class="row">
  //       <div class="col-4">Go to college</div>
  //       <div class="col-4">02/01/2026</div>
  //       <div class="col-2"><button type="button" class="btn-solid theme-danger">Delete</button></div>
  //     </div>
  //   </div>

  // </div>

  return <div>
    <AppName></AppName>
    <AddToDo></AddToDo>
    <Todoitem1></Todoitem1>
    <Todoitem2></Todoitem2>
  </div>

}

export default App