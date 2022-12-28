import React from "react";
class Dog extends React.Component{
    

    
    render(){
     
        const dogdata = this.props;
        return (
        <div>
        <h1>{dogdata.Name}</h1>    
        <img src={dogdata.Link} alt={dogdata.Name} height={300}/>
        
        </div>)
    }

}

export default Dog