import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const chosenOne = Math.floor(Math.random() * anecdotes.length)
  const [selected, setSelected] = useState({
    original: chosenOne, copy: chosenOne
  })

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

  let randomOne
  const handleClick = () => {
    while (true)  {
      randomOne = Math.floor(Math.random() * anecdotes.length)
      if (randomOne !== selected.original){
        break
      }
    }
    const newSelects = { 
      original: randomOne, 
      copy: randomOne 
    }
    setSelected(newSelects)
  }

  const handleVote = () => {
    anecdotesCopy[selected.copy] += 1
    const newSelects = { 
      original: selected.original, 
      copy: selected.copy
    }
    setSelected(newSelects)
  }

  let votes = 0
  const maxVotes = () => {
    votes = anecdotesCopy[anecdotesCopy.indexOf(Math.max(...anecdotesCopy))]
    if (votes > 0){
      return (
        <>
          <br />
          <h1>Anecdote with most votes</h1>
          <p>
            {anecdotes[anecdotesCopy.indexOf(Math.max(...anecdotesCopy))]}
            <br /><br />
            Has {votes} votes
          </p>
        </>
      )
    }
  }
     
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {props.anecdotes[selected.original]}
        <br /><br />
        Has {props.anecdotesCopy[selected.copy]} votes
      </p>
      <Button onClick={handleVote} text='Vote' />
      <Button onClick={handleClick} text='Next anecdote' />
      {maxVotes()}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

let anecdotesCopy = [...anecdotes]
anecdotesCopy = anecdotesCopy.map(function() {return 0})

ReactDOM.render(
  <App anecdotes={anecdotes} anecdotesCopy={anecdotesCopy} />,
  document.getElementById('root')
)