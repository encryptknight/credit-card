import { useRef, useState } from 'react';
import './App.css';
import CCback from './components/CCback';
import CCfront from './components/CCfront';
import Left from './images/left.png';


function App() {
  let cardHolderRef=useRef(null);
  let cardNumberRef=useRef(null);
  let monthRef=useRef(null);
  let yearRef=useRef(null);
  let cvcRef=useRef(null);
  let [cardHolder,setCardHolder]=useState('Jane Appleseed');  
  let [cardNumber,setCardNumber]=useState('0000 0000 0000 0000');
  let [date,setDate]=useState('00/00');
  let [cvc,setCVC]=useState('000');

  let formatCardNumber=(input)=>{
    const digitsOnly = (input ?? '').replace(/\s/g, '').replace(/\D/g, '');

    // Insert spaces after every 4 digits
    const formattedNumber = digitsOnly.replace(/(\d{4})/g, '$1 ');
    return formattedNumber.trim();

  }
  let validateForm=(e)=>{

  }
  
  let handleForm=(e)=>{
    e.preventDefault();
    setCardHolder(cardHolderRef.current.value.toUpperCase());
    setCardNumber(formatCardNumber(cardNumberRef.current.value));
    setDate(monthRef.current.value+'/'+yearRef.current.value);
    setCVC(cvcRef.current.value);
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
        <CCback cvc={cvc} />
      </div>

      <div className='form'>
        <form onSubmit={handleForm}>
          <label>CARDHOLDER NAME</label>
          <input type='text' id='card-name' placeholder='e.g. Jane Appleseed' name='cardHolder' ref={cardHolderRef} /><br/>
          <p className='warn'>Cardholder name required</p>
          <br/>
          <label>CARD NUMBER</label>
          <input type='text' id='card-number'   placeholder='e.g. 1234 5678 9123 0000' name='cardNumber' ref={cardNumberRef} /><br/>
          <p className='warn'>Card number required</p>
          <br/>
          <div className='date-cvv'>
          <div id='date'>
          <label>EXP.DATE(MM/YY)</label>
          <input type='number' id='mm'   placeholder='MM' name='month' ref={monthRef} />
          <input type='number' id='yy'  placeholder='YY' name='year' ref={yearRef} />
          <p className='warn'>Expiry date must be numeric</p>
          </div>
          <div id='cvv'>
          <label>CVC</label>
          <input type='number'  placeholder='e.g. 123' name='cvc' ref={cvcRef} /><br/>
          <p className='warn'>CVC must be numeric</p><br/>
          </div>
          </div><br/>
          <div>
          <button id='btn' type='submit' >Confirm</button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default App;
