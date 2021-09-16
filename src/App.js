import './App.css';
import {useState} from 'react';
import FillOptions from './FillOptions';

//TÄMÄ ON SE PALAUTETTAVA

function App() {
  const [weight,setWeight] = useState('');
  const [bottles,setBottles] = useState('');
  const [time,setTime] = useState('');
  const [result,setResult] = useState ();
  const [gender,setGender] = useState();
  

  function calculate(e) {
    e.preventDefault();
    //yllä oleva estää sivun refreshauksen
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsleft = grams - (burning * time);


    let tulos = 0;

    if (gender == "male") {
      tulos = gramsleft / (weight * 0.7);
    }else {
     tulos = gramsleft / (weight *0.6);
    }
    setResult(tulos.toFixed(2));

  }


  return (
    <div id="container">
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
        </div>
        <input type= "number" 
          value={weight} 
          onChange={e => setWeight(e.target.value)}
          />
        <div>
          <label>Bottles</label>
          
        </div>
        <select
           value={bottles}
           onChange={e => setBottles(e.target.value)}
        >
        <FillOptions />
        </select>
        <div>
          <label>Time</label>

        </div>
        <select
         value={time}
         onChange={e => setTime(e.target.value)}
        >
        <FillOptions />
      </select>
      <div>
          <label>Gender</label>
        </div>
     

      <form>
        <input type="radio" id="male" name="gender" value= "male" onChange={e => setGender(e.target.value)}/>
          <label for="male" >Male</label>
        <input type="radio" id="female" name="gender" value= "female" onChange={e => setGender(e.target.value)}/>
          <label for="female" >Female</label>
      </form>

        <div>
       <output id="tulos">{result}</output>
      </div>
      <button>Calculate</button>
    </form>
  </div>
  );
}

export default App;
