function Todoitem1(){
    let todo_name = "Buy Milk"
    let todo_date = "01/01/2026"
    return (
            <div className="container text-center">
                <div class="row">
                  <div class="col-4">{todo_name}</div>
                  <div class="col-4">{todo_date}</div>
                  <div class="col-2"><button type="button" class="btn-solid theme-danger">Delete</button></div>
                </div>
            </div>
    );
}

export default Todoitem1