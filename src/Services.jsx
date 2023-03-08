import React, { useState } from "react";
import ServicesData from "./ServicesData";
import data from "./dataApi"
const Services = () => {
    const [serData,setSerData] = useState(data)

    return (
        <>
         <ServicesData serData = {serData}/> 
        </>
    )
    
}

export default Services;