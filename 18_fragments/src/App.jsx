import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";

function App() {
  let food_items = []
  // let food_items = ["Rice", "Dal", "Salad", "Ghee", "Roti"];

  // if (food_items.length === 0){
  //   return <h3>I am still hungry</h3>
  // }

  // let emptyMessage = (food_items.length === 0 ? <h3>I am still hungry</h3>: null)

  return (
    // <React.Fragment>
    //   <h1>Healthy Foods</h1>
    //   <ul class="list-group">
    //   <li class="list-group-item">Dal</li>
    //   <li class="list-group-item">Green Vegitable</li>
    //   <li class="list-group-item">Rice</li>
    //   <li class="list-group-item">Roti</li>
    //   <li class="list-group-item">Milk</li>
    //   </ul>
    // </React.Fragment>

    // <>
    //   <h1>Healthy Foods</h1>
    //   <ul class="list-group">
    //   <li class="list-group-item">Dal</li>
    //   <li class="list-group-item">Green Vegitable</li>
    //   <li class="list-group-item">Rice</li>
    //   <li class="list-group-item">Roti</li>
    //   <li class="list-group-item">Milk</li>
    //   </ul>
    // </>

    <>
      <h1>Healthy Foods</h1>
      {/* {(food_items.length == 0?<h3>I am still hungry</h3> : null)} */}
      {/* {emptyMessage} */}
      {food_items.length === 0 && <h3>I am still hungry</h3>}
      <ul className="list-group">
        {food_items.map((item) => (
          <li key = {item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>


  );
}

export default App;
