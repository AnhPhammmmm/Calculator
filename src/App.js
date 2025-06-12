import { useState } from 'react';
import './App.css';

function App() {

  const [display, setDisplay] = useState('')

  const handleClick = (v) => {
    setDisplay(display+v)
  }

  const handleDelete = () => {
    setDisplay(display.slice(0,-1))
  }

  const handleClear = () => {
    setDisplay('')
  }

  return (
    <div className='Container'>
      <div className='Calculator'>
        <div className='Screen'>{display}</div>
        <div className='Button'>
          <div className='Row'>
            <button name='AC' id='feature' onClick={handleClear}>AC</button>
            <button name='DEL' id='feature' onClick={handleDelete}>DEL</button>
            <button name='%' id='feature' onClick={(e) => handleClick(e.target.name)}>%</button>
            <button name='/' id='op' onClick={(e) => handleClick(e.target.name)}>/</button>
          </div>
          <div className='Row'>
            <button name='7' id='num' onClick={(e) => handleClick(e.target.name)}>7</button>
            <button name='8' id='num' onClick={(e) => handleClick(e.target.name)}>8</button>
            <button name='9' id='num' onClick={(e) => handleClick(e.target.name)}>9</button>
            <button name='*' id='op' onClick={(e) => handleClick(e.target.name)}>*</button>
          </div>
          <div className='Row'>
            <button name='4' id='num' onClick={(e) => handleClick(e.target.name)}>4</button>
            <button name='5' id='num' onClick={(e) => handleClick(e.target.name)}>5</button>
            <button name='6' id='num' onClick={(e) => handleClick(e.target.name)}>6</button>
            <button name='-' id='op' onClick={(e) => handleClick(e.target.name)}>-</button>
          </div>
          <div className='Row'>
            <button name='1' id='num' onClick={(e) => handleClick(e.target.name)}>1</button>
            <button name='2' id='num' onClick={(e) => handleClick(e.target.name)}>2</button>
            <button name='3' id='num' onClick={(e) => handleClick(e.target.name)}>3</button>
            <button name='+' id='op' onClick={(e) => handleClick(e.target.name)}>+</button>
          </div>
          <div className='Row'>
            <button name='0' id='num0' onClick={(e) => handleClick(e.target.name)}>0</button>
            <button name='.' id='num' onClick={(e) => handleClick(e.target.name)}>.</button>
            <button name='=' id='op' onClick={(e) => handleClick(e.target.name)}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
