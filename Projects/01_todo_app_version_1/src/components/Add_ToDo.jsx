function AddToDo(){
    return <div>
        <div class="container text-center">
            <div class="row">
                <div class="col-4"><input type="text" placeholder="Enter TODO here"/></div>
                <div class="col-4"><input type="date" name="date" id="date" /></div>
                <div class="col-2"><button type="button" class="btn-solid theme-success">Add</button></div>
            </div>
        </div>
    </div>
}

export default AddToDo