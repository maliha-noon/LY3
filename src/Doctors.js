import React from "react";
export default function Doctors(){
    const doctors=[
        {id: 1, name: "Dr. Anika Rahman(Orthodontist)"},
        {id: 2, name: "Dr. Farhana Tarannum(Pediatric Dentist)"},
        {id: 3, name: "Dr. Sarah Khan (Root Canal Specialist)"},
        {id: 4,name:"Dr. David Kim(Cosmetic Dentist )" },
     ];
        return(
            <div>
            <h2>Available Doctors</h2>
            <ul>
            {doctors.map((doc)=> (
                <li key={doc.id}>{doc.name}</li>
            ))}
            </ul>
            </div>
        );

}