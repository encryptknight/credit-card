import './App.css';
import CCback from './components/CCback';
import CCfront from './components/CCfront';
import Left from './images/left.png';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      
      <div className='image'>
      <img src={Left} alt='Left'/>
      </div>
      <div className='front-card'>
      <CCfront/>
      </div>
      <div className='back-card'>
        <CCback/>
      </div>

      <div className='form'>
        <form>
          <label>CARDHOLDER NAME</label>
          <input type='text' id='card-name' placeholder='e.g. Jane Appleseed'/><br/>
          <p className='warn'>Cardholder name required</p>
          <br/>
          <label>CARD NUMBER</label>
          <input type='text' id='card-number' placeholder='e.g. 1234 5678 9123 0000'/><br/>
          <p className='warn'>Card number required</p>
          <br/>
          <div className='date-cvv'>
          <div id='date'>
          <label>EXP.DATE(MM/YY)</label>
          <input type='number' id='mm' placeholder='MM'/>
          <input type='number' id='yy' placeholder='YY'/>
          <p className='warn'>Expiry date must be numeric</p>
          </div>
          <div id='cvv'>
          <label>CVC</label>
          <input type='number' placeholder='e.g. 123'/><br/>
          <p className='warn'>CVC must be numeric</p><br/>
          </div>
          </div><br/>
          <div>
          <button id='btn'>Confirm</button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default App;
