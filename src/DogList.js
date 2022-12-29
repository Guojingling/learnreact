import React from "react";
import Dog from "./Dog";

function DogList(props) {
   
    
    const dogsData = props.data
    console.log("Dog List", {dogsData})
    
       
    return(
       
        dogsData.map(dog => <Dog name={dog.name} link = {dog.link} key = {Math.random()}></Dog>)
        //DogsData.map(dog => <Dog Name={dog.Name} Link={dog.Link}></Dog>)
    )
    
}

export default DogList