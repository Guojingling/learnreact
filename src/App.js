//import logo from './logo.svg';
import React from 'react';
import './App.css';
import DogList from './DogList'
import Form from './Form';
import { useState } from 'react';

function App(props) {
  const[dogsData, setDogsData] = useState([]);
 
  function addDogBreed(dogBreedData) {
    let nameStr = dogBreedData.substr(dogBreedData.indexOf("breeds")+7);
    let breednName = nameStr.substr(0, nameStr.indexOf("/"));
    const dogDataWithName = {name: breednName, link:dogBreedData};
    dogsData.push(dogDataWithName);
    setDogsData(dogsData);
    //setDogsData([...dogsData,dogDataWithName])

    //this.setState(prevState => 
     // ({DogsData:[...prevState.DogsData, dogDataWithName]})
      //)
    console.log("instance", dogDataWithName);
    console.log("array", dogsData);
    console.log("array with ...", ...dogsData);
  }
 
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
      <Form addDogBreedAction = {addDogBreed}></Form>
      <DogList data = {dogsData} />
    </div>

  );
}

export default App;
