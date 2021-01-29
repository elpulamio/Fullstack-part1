import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  const allClicks = good + neutral + bad
  const averageClicks = ((good * 1) + (neutral * 0) + (bad * -1)) / allClicks
  const positiveClicks = good / allClicks * 100

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleClickGood}>
          good
        </button>
        <button onClick={handleClickNeutral}>
          neutral
        </button>
        <button onClick={handleClickBad}>
          bad
        </button>
      </div>
      <h1>statistics</h1>
      <div>
        good {good}
        <br />
        neutral {neutral}
        <br />
        bad {bad}
        <br />
        all {allClicks}
        <br />
        average {averageClicks}
        <br />
        positive {positiveClicks} %
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
