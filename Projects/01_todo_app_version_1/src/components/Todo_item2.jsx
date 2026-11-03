function Todoitem2(){
    let todo_name = "Go to college"
    let todo_date = "02/01/2026"
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

export default Todoitem2