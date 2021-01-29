import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
      <Button handleClickGood={handleClickGood} handleClickNeutral={handleClickNeutral} handleClickBad={handleClickBad}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} averageClicks={averageClicks} positiveClicks={positiveClicks}/>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClickGood}>
        good
      </button>
      <button onClick={props.handleClickNeutral}>
        neutral
      </button>
      <button onClick={props.handleClickBad}>
        bad
      </button>
    </div>
  )
}

const Statistic = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Statistics = (props) => {
  if (props.allClicks > 0) {
    return (
      <div>
        <Statistic text="good" value ={props.good} />
        <Statistic text="neutral" value ={props.neutral} />
        <Statistic text="bad" value ={props.bad} />
        <Statistic text="all" value ={props.allClicks} />
        <Statistic text="average" value ={props.averageClicks} />
        <Statistic text="positive" value ={props.positiveClicks + " %"} />
      </div>
    )
  }
  else {
    return (
      <div>
        no feedback given
      </div>
    )
  }  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
