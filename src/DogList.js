import React from "react";
import Dog from "./Dog";

class DogList extends React.Component {
   
    render(){
    const DogsData = this.props.data
       
    return(
        DogsData.map(dog => <Dog {...dog} key = {Math.random()}></Dog>)
        //DogsData.map(dog => <Dog Name={dog.Name} Link={dog.Link}></Dog>)
    )
    }
}

export default DogList