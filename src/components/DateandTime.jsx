import React, { useEffect, useState } from 'react'

const DateandTime = () => {
    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    
    const [today, setTime] = useState(new Date()); 
     
    
    
    let day = (Days[today.getDay()]).slice(0,3)
    let date = today.getDate()
    let month = (Months[today.getMonth()]).slice(0,3)
    let Hours = today.getHours()
    let hour = Math.floor(today.getHours() % 12)
         hour = hour === 0 ? 12 : hour
    let minute = today.getMinutes()
    let sec = today.getSeconds()
    let timezone = Hours >= 12 ? 'pm' : 'am'
    
 


useEffect(()=>{

  const id =   setInterval(() => {
        setTime(new Date())
    }, 1000)

     return ()=>{
        clearInterval(id)
     }
     
    
    
},[])
 


    return (
        <div>
            <p>{day} {date} {month} {String(hour).padStart(2, '0')}:{String(minute).padStart(2, '0')}:{String(sec).padStart(2,'0')} {timezone}</p>
        </div>
    )
}

export default DateandTime
