//import logo from './logo.svg';
import React from 'react';
import './App.css';
import DogList from './DogList'
import Form from './Form';

class App extends React.Component {
  constructor(props){
    super(props);
    //const testData = [
      //{Name: "Terrier-Welsh", Link:"https:\/\/images.dog.ceo\/breeds\/terrier-welsh\/lucy.jpg"}
    //]
    this.state = {DogsData:[]}
    
  } 
  addDogBreed = dogBreedData =>{
    let nameStr = dogBreedData.substr(dogBreedData.indexOf("breeds")+7)
    let name = nameStr.substr(0, nameStr.indexOf("/"))
    const dogDataWithName = {Name: name, Link:dogBreedData};
    this.setState(prevState => 
      ({DogsData:[...prevState.DogsData, dogDataWithName]})
      )
    console.log("App", dogDataWithName)
  }
  render(){   
  return (
    
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Form onSubmit = {this.addDogBreed}></Form>
      <DogList data = {this.state.DogsData}/>
    </div>

  );
}}

export default App;
