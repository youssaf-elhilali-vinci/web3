import { useState } from 'react'
import './App.css'


function StatisticLine({ text, value }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>

  )
}

function Statistics({ countGood, countNeutral, countBad, countAll }) {
  return (
    <>
      {(countAll === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <h1>Statistics</h1>
          <StatisticLine text="good" value={countGood} />
          <StatisticLine text="neutral" value={countNeutral} />
          <StatisticLine text="bad" value={countBad} />
          <StatisticLine text="all" value={countAll} />
          <StatisticLine text="average" value={(countGood - countBad) / countAll} />
          <StatisticLine text="positive" value={(countGood / countAll) * 100 + "%"} />
        </div>
      )
      )}
    </>

  )
}



function App() {
  const [countGood, setCountGood] = useState(0)
  const [countNeutral, setCountNeutral] = useState(0)
  const [countBad, setCountBad] = useState(0)
  const [countAll, setCountAll] = useState(0)


  const handleGood = () => {
    setCountGood(countGood + 1)
    setCountAll(countAll + 1)
  }

  const handleNeutral = () => {
    setCountNeutral(countNeutral + 1)
    setCountAll(countAll + 1)
  }

  const handleBad = () => {
    setCountBad(countBad + 1)
    setCountAll(countAll + 1)
  }

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>

      </div>

      <Statistics countGood={countGood} countNeutral={countNeutral} countBad={countBad} countAll={countAll} />

    </>
  )

}

export default App
