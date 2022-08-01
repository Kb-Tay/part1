import { useState } from 'react'
const Votes = ({points,anecdotes}) => {
    console.log(points)
    const Max = Math.max(...points)
    const Index = points.indexOf(Max)
    return(
      <div>
        <p>{anecdotes[Index]}</p>
        <p>has {points[Index]} votes</p>
      </div>
    )
  }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ] 
;
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0])

  //MDN method of getting range [min,max) exlusive of max
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  
  const handleState = () => {
    const x = getRandom(0,7)
    //prevents rerendering when state is the same
    if (selected !== x) {
      setSelected(x)
    }

    return
  }
  
  const upVote = () => {
    // copy points attribute to create new array to update state, not update state directly 
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  //const upVote = () => {copy[selected] += 1 console.log(copy)console.log(copy[selected])}
  
  return (
    <div>
      <h1>Anecdotes of the Day </h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={upVote}>Vote</button>
      <button onClick={handleState}>next anecdotes</button>
      <h1>Anecdotes with most Votes</h1> 
      <Votes points={points} anecdotes={anecdotes}/> 
    </div>
  )
}

export default App

  //function to get range between (min,max) inclusive
  //var randomIntRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range