import { useState } from 'react';
import './App.css';
import CCback from './components/CCback';
import CCfront from './components/CCfront';
import Left from './images/left.png';


function App() {
  let [empty,setEmpty]=useState(0);
  let [cardHolder,setCardHolder]=useState('Jane Appleseed');
  let [cardNumber,setCardNumber]=useState('0000 0000 0000 0000');
  let [month,setMonth]=useState('00');
  let [year,setYear]=useState('00');
  let [date,setDate]=useState(month+'/'+year);
  let [cvc,setCVC]=useState('000');
  let validateForm=(e)=>{
    e.preventDefault();
    
  }
  return (
    <div className="App">
      <div className='image'>
      <img src={Left} alt='Left'/>
      </div>
      <div className='front-card'>
      <CCfront cardNumber={cardNumber} cardHolder={cardHolder} date={date} />
      </div>
      <div className='back-card'>
        <CCback/>
      </div>

      <div className='form'>
        <form onSubmit={validateForm}>
          <label>CARDHOLDER NAME</label>
          <input type='text' id='card-name' placeholder='e.g. Jane Appleseed' name='cardHolder' /><br/>

          <p className='warn'>Cardholder name required</p>
          
          <br/>
          <label>CARD NUMBER</label>
          <input type='text' id='card-number'   placeholder='e.g. 1234 5678 9123 0000' name='cardNumber'/><br/>
          <p className='warn'>Card number required</p>
          <br/>
          <div className='date-cvv'>
          <div id='date'>
          <label>EXP.DATE(MM/YY)</label>
          <input type='number' id='mm'   placeholder='MM' name='month'/>
          <input type='number' id='yy'  placeholder='YY' name='year'/>
          <p className='warn'>Expiry date must be numeric</p>
          </div>
          <div id='cvv'>
          <label>CVC</label>
          <input type='number'  placeholder='e.g. 123' name='cvc'/><br/>
          <p className='warn'>CVC must be numeric</p><br/>
          </div>
          </div><br/>
          <div>
          <button id='btn' type='submit'>Confirm</button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default App;
