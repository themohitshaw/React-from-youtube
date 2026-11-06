import styles from "./Todo_item.module.css"

function Todoitem({todo_name , todo_date}){
    return (
            <div className={`${styles["container"]} text-center`}>
                <div class="row">
                  <div class="col-4">{todo_name}</div>
                  <div class="col-4">{todo_date}</div>
                  <div class="col-2"><button type="button" class="btn-solid theme-danger">Delete</button></div>
                </div>
            </div>
    );
}

export default Todoitem