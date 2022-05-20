import './App.css';
import { useState } from 'react';
import { checkIfWin } from './helper'
import RenderBox from './Box'


function App() {
  const [boxes, setboxes] = useState(new Array(9).fill(''))
  const [activeSignX, setActiveSignX] = useState(true)
  const [winningSet, setWinningSet] = useState(null)
  const insertNewValAt = (i) => {
    if (!winningSet) {
      const current = [...boxes]
      current[i] = activeSignX ? 'X' : 'O';
      const foundWinningSet = checkIfWin(i, boxes, current[i])
      setboxes(current);
      setActiveSignX(!activeSignX)
      if(foundWinningSet){
        setWinningSet(foundWinningSet)
      }
    }
  }
  return (
    <div className="App">
      <div className='box-wrapper'>
        {boxes.map((val, i) => {
          const markWon = !!winningSet && winningSet.includes(i)
          return (
            <RenderBox idx={i} onClick={insertNewValAt} val={val} key={`box_${i}`} won={markWon} />)
        })}
      </div>
    </div>
  );
}

export default App;
