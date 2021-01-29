import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <div>
        good {props.good}
        <br />
        neutral {props.neutral}
        <br />
        bad {props.bad}
        <br />
        all {props.allClicks}
        <br />
        average {props.averageClicks}
        <br />
        positive {props.positiveClicks} %
      </div>
    </div>
  )  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)
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
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} averageClicks={averageClicks} positiveClicks={positiveClicks}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
