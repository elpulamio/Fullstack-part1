import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClickGood={handleClickGood} handleClickNeutral={handleClickNeutral} handleClickBad={handleClickBad}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
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
    <>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </>
  )
}

const Statistics = (props) => {
  const allClicks = props.good + props.neutral + props.bad
  const averageClicks = (((props.good * 1) + (props.neutral * 0) + (props.bad * -1)) / allClicks).toFixed(2)
  const positiveClicks = (props.good / allClicks * 100).toFixed(2)

  if (allClicks > 0) {
    return (
      <table>
        <tr>
          <Statistic text="good" value ={props.good} />
        </tr>
        <tr>
          <Statistic text="neutral" value ={props.neutral} />
        </tr>
        <tr>
          <Statistic text="bad" value ={props.bad} />
        </tr>
        <tr>
          <Statistic text="all" value ={allClicks} />
        </tr>
        <tr>
          <Statistic text="average" value ={averageClicks} />
        </tr>
        <tr>
          <Statistic text="positive" value ={positiveClicks + " %"} />
        </tr>
      </table>
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
