import AppName from "./components/App_name";
import AddToDo from "./components/Add_ToDo";
import Todoitems from "./components/Todo_items";
import "./App.css";

function App() {
  let todo_items = [{
    name : "Milk",
    duedate : "04/01/2026",
  },
  {
    name : "Go to college",
    duedate : "05/01/2026",
  },
  {
    name : "Buy a biscuit",
    duedate : "06/01/2026",
  },
];

  return (
    <div>
      <AppName></AppName>
      <AddToDo></AddToDo>
      <Todoitems todo_items= {todo_items}></Todoitems>
    </div>
  );
}

export default App;
