import React from "react";
class Form extends React.Component{
    state = {dogBreed:"", dogBreedName:"tempValue"}
    //userInput = React.createRef();
    submitHandler = (e) =>{
        e.preventDefault();
        //console.log(this.userInput.current.value)
        //console.log(document.getElementById("userInputbox").value)
        //console.log(this.state.dogBreed)
        //console.log(this.state.dogBreedName)
        let i=0;
        while (i<4 &&!this.state.dogBreedName.includes(this.state.dogBreed)){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                   dogBreedName: result.message
                });
                this.props.onSubmit(result.message);
            },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
      i++;
    }
        
    }
   
    render(){     
        return(
            <form onSubmit={this.submitHandler}>
                Dog Breed:
                <input 
                    id = "userInputbox" 
                    type="text" 
                    placeholder="Dog breed" 
                    value = {this.state.dogBreed}
                    onChange = {e => this.setState({dogBreed:e.target.value})}
                    required></input>
                <button>Search</button>
            </form>
        )
    }
    
}

export default Form