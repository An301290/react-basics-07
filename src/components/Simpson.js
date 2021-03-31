import React from "react"; 


function Simpson({image, firstName, lastName}){
    return (
        <>
        <img src={image}></img>  
        <p>{firstName} {lastName}</p>
        </>
    )


}

export default Simpson;