function Hello(){
    let name = "Prashant"
    let number = 766
    let full_name= () =>{
        return "Prashant Jain"
    }

    return <div>
        <h2>I am your react teacher {full_name}</h2> <h3>Message No - {number} Attend {name} classes</h3>
    </div>

}

export default Hello