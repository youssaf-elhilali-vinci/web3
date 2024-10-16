import { useState } from 'react'
import './App.css'

function App() {
  const [countGood, setCountGood] = useState(0)
  const [countNeutral, setCountNeutral] = useState(0)
  const [countBad, setCountBad] = useState(0)
  const [countAll, setCountAll] = useState(0)

  return (
    <>
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setCountGood(countGood + 1) + setCountAll(countAll + 1)}>Good</button>
      <button onClick={() => setCountNeutral(countNeutral + 1) + setCountAll(countAll + 1)}>Neutral</button>
      <button onClick={() => setCountBad(countBad + 1) + setCountAll(countAll + 1)}>Bad</button>

    </div>
    
    {(countAll === 0 ? (
      <p>No feedback given</p>
    ) : (
      <div>
        <h1>Statistics</h1>
        <p>good {countGood}</p>
        <p>neutral {countNeutral}</p>
        <p>bad {countBad}</p>
        <p>all {countAll}</p>
        <p>average {(countGood - countBad) / countAll}</p>
        <p> positive {(countGood / countAll) * 100}%</p>
      </div>
    )
    )}






    
    </>
  )




}



export default App
