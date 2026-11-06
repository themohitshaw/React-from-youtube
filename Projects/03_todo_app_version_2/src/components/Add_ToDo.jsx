import styles from "./Add_Todo.module.css"


function AddToDo(){
    return <div>
        <div className={`${styles["container"]} text-center`}>
            <div className="row">
                <div class="col-4"><input type="text" placeholder="Enter TODO here"/></div>
                <div class="col-4"><input type="date" name="date" id="date" /></div>
                <div class="col-2"><button type="button" className="btn-solid theme-success">Add</button></div>
            </div>
        </div>
    </div>
}

export default AddToDo