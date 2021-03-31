import React from "react"; 
import logo from './logo.svg';
import './App.css';
import Simpson from './components/Simpson';

const bart = { 
image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
firstName: "Bart",
lastName: "Simpson" 
}; 

const homero = { 
image: "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
firstName: "Homer",
lastName: "Simpson" 
}; 

const maggie = { 
image: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
firstName: "Maggie",
lastName: "Simpson" 
}; 


function App() {
  return (
    <div className="App">
      
        <Simpson {...bart}/>
        <Simpson {...homero}/>
        <Simpson {...maggie}/>
      
    </div>
  );
}

export default App;
