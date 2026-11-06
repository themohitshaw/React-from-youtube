import Todoitem from "./Todo_item"
const Todoitems = ( {todo_items} ) =>{
    return<>
        {todo_items.map(items => <Todoitem todo_name = {items.name} todo_date = {items.duedate}></Todoitem>)}
    </>

}

export default Todoitems