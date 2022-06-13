import { useState } from 'react';
import axios from 'axios'
import './App.css';
import SimpsonCard from './SimpsonCard';


const API_URL = 'https://simpsons-quotes-api.herokuapp.com/quotes?count=1'

const simpsonCharacter1 = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
}

function App() {

const[quote, setQuote] = useState(simpsonCharacter1)

const simpsonCharacterChange = () => {
  axios
  .get("https://simpsons-quotes-api.herokuapp.com/quotes?count=1")
  .then((response) => response.data)
  .then ((data)=>{ 
    console.log(data)
    setQuote(data[0]);
  });
};


  return (
    <div className="App">
     <SimpsonCard simpson = {quote}  />
      <button type="button" onClick={simpsonCharacterChange}> New Simpson Character</button>
      </div>
     

  );
}

export default App;
