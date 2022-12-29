import React from "react";
import { useState } from "react";
function Form (props){
    const[dogBreed, setDogBreed] = useState("");
    const[dogBreedName, setDogBreedName] = useState("tempName");
    const[error, setError] = useState(null);


    //userInput = React.createRef();
    function submitHandler(e) {
        e.preventDefault();
        //console.log(this.userInput.current.value)
        //console.log(document.getElementById("userInputbox").value)
        //console.log(this.state.dogBreed)
        //console.log(this.state.dogBreedName)
        let i=0;
        while (i<2 &&!dogBreedName.includes(dogBreed)){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(
            (result) => {
                setDogBreedName(result.message);
                props.addDogBreedAction(result.message);
            },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(
            error
          );
        }
      )
      i++;
    }

    setDogBreed("");
        
    }
   
   
        return(
            <form onSubmit={submitHandler}>
                Dog Breed:
                <input 
                    id = "userInputbox" 
                    type="text" 
                    placeholder="Dog breed" 
                    value = {dogBreed}
                    onChange = {e => setDogBreed(e.target.value)}
                    required></input>
                <button type="submit">Search</button>
            </form>
        )
   
    
}

export default Form