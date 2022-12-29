import React from "react";
function Dog(props) {
    //const dogdata = props;
    console.log("Dog", props.name);
    return (
        <div>
            <h1>{props.name}</h1>    
            <img src={props.link} alt={props.name} height={300}/>
        </div>
    );
}

export default Dog