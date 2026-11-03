function Date_Time(){
    const now = new Date()
    const date = now.toLocaleDateString()
    const time = now.toLocaleTimeString()
    return <center><h1>Date is {date}</h1><h1>Time is {time}</h1></center>
}

export default Date_Time