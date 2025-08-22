import React, {useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function Services(){
    const services=[
        {id:1 , name:"Teeth Whitening", doctor: "Dr. Anika Rahman"},
       {id: 2  , name:"Braces Consultation", doctor : "Dr. Farhana Tarannum"},
        {id: 3 , name:"Root Canal Treatment", doctor :"Dr. Sarah Khan"},
        {id:4 , name:"Dental Cleaning", doctor :"Dr.David Kim"},
    ];
    const[selectedServices,setSelectedServices]=useState(null);
    const[selectedDate,setSelectedDate] =useState(null);
    const[selectedTime,setSelectedTime]=useState(null);
    const availableTimes =
[
    "10:00 Am",
    "11:00 Am",
    "2:00 Pm",
    "3:00 pm",
    "5:00 Pm",
    "6:00 Pm",
] ;
const handleBooking = ( ) => {
    if(!selectedServices || !selectedDate || !selectedTime){
       alert("please select service,date and time before booking."); 
        return;
    }
    alert( `Appointment Confirmed!
    Service: ${selectedServices.name}
    Doctor: ${selectedServices.doctor}
    Date: ${selectedDate.toDateString()}
    Time: ${selectedTime}`);
};
   return (
        <div style={{backgroundColor:"white",minHeight: "100vh",padding: "20px"}}>
            <h1>Book an Appointment</h1>
<div style={{display:"flex",gap:"10px",marginBottom:"20px",flexWrap:"wrap"}}>
    {services.map((service)=>(
        <button
        key={service.id}
        onClick={()=>{setSelectedServices(service)
            setSelectedDate(null);
            setSelectedTime(null);
        }}
        style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: selectedServices?.id ===service.id ? "2px solid blue" : "1px solid #ddd",
            backgroundColor: selectedServices?.id ===service.id ? "#e6f0ff" : "#f9f9f9",
            cursor: "pointer",
        }}
        >
            {service.name}
            </button>
    ))}
        

    
</div>
{selectedServices && (
<div style ={{marginTop: "20px"}}>
    <h2>{selectedServices.name}</h2>
    <Calendar onChange={setSelectedDate} value={selectedDate} />
    <table
    style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "10px",
        border: "1px solid #ddd",
    }}
    >
        <thead>
           <tr style ={{backgroundColor : "#f2f2f2"}}>
           <th style={{border: "1px solid #ddd",padding: "10px"}}>Service</th>
           <th style={{border: "1px solid #ddd",padding: "10px" }}>Doctor</th>
           <th style={{border: "1px solid #ddd",padding: "10px"}}>Availabe Times</th>
 
                </tr>
        </thead>
        <tbody>
            <tr>
           <td style={{ border: "1px solid #ddd", padding: "10px"}}>
            {selectedServices.name}
            </td> 
          <td style={{border: "1px solid #ddd", padding: "10px"}}>
            {selectedServices.doctor}
            </td>   
            
                

               <td style={{border: "1px solid #ddd",padding : "10px"}}>
                {availableTimes.map((time)=>(
                <button
                key={time}
            onClick={()=> setSelectedTime(time)}
        style={{
            margin: "5px",
            padding: "5px 10px",
            borderRadius: "5px",
        border: selectedTime ===time ? "2px solid blue" : "1px solid #ccc ",
    backgroundColor: selectedTime ===time ? "#e6f0ff" : "#fff",
      }}
      >
        {time}
        </button>
                ))}

                </td>   
            </tr>
        </tbody>

    </table>
    <button
    onClick={handleBooking}
    style={{
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "blue",
        color: "white",
        cursor:"pointer",
    }}
    >
        Confirm booking
    </button>
</div>
)}
        </div>
    );

}