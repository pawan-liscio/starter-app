import './App.css';
import { useEffect, useState } from 'react';
import { checkIfWin } from './helper'


function App() {
  const [boxes, setboxes] = useState(new Array(9).fill(''))
  const [active, setActive] = useState('O')
  const [winningSet, setWinningSet] = useState([null, null, null])
  const insertNewValAt = (i)=>{
    if(!winningSet[0]){
      const current = [...boxes]
      current[i] = active;
      setboxes(current);
      setActive(active==='O'?'X':'O')
      setWinningSet(checkIfWin(i, boxes, active))
    }
  }
  return (
    <div className="App">
      <div className='box-wrapper'>
        {boxes.map((val, i)=>{
            return <RenderBox idx={i} onClick={insertNewValAt} val={val} key={`box_${i}`} won={winningSet.includes(i)}/>
          })}
      </div>
    </div>
  );
}

function RenderBox (props){
  const {onClick, idx, val, won} = props
  const setBox = ()=>!val && onClick(idx)
  const classList = `box${won?' won':''}`
  return <div className={classList} key={`box_${idx}`} onClick={setBox}>{val}</div>
}

export default App;
