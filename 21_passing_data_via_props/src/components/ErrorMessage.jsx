const ErrorMessage = ({ foodItems }) =>{
    // let foodItems =[]
    // let foodItems = ["Rice", "Roti", "Dal", "Ghee", "Salad"];

    return (
        <>
            {(foodItems.length === 0 ? <h3>I am hungry now</h3> : null)}
        </>
    );
}

export default ErrorMessage