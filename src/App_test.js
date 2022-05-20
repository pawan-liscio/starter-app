import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [boxes, setboxes] = useState(new Array(9).fill(''))
  return (
    <div className="App">
      <div className='box-wrapper'>
        {
          boxes.map((val, i)=>{
            return <div className={`box ${i}`}>{val}</div>
          })
        }
      </div>
    </div>
  );
}

export default App;
