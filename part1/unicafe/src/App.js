import { useState } from 'react'

//const Average = (props) => {const x = ({props.good}*1 + {props.bad}*(-1) / props.total)return<div> {x} </div>
const Button = ({onClick,text}) => {
  return<button onClick={onClick}>{text}</button>
}

const Statistics = (props) => {
  const X = props.good + props.bad + props.neutral
  const Average = (props.good*1 + props.bad*-1) / X
  const Percentage = (props.good / X)*100

  if (X === 0){
    return<div>No feedback given</div>
  }

    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good}/>
          <StatisticLine text='bad' value={props.bad}/>
          <StatisticLine text='neutral' value={props.neutral}/>
          <StatisticLine text='all' value={X}/>
          <StatisticLine text='average' value={Average}/>
          <StatisticLine text='percentrage' value={Percentage}/>
        </tbody>
      </table>
    )
}

const StatisticLine = ({text,value}) => {
  return(
    <div>
      <p>{text}:{value}</p>
    </div>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodincrease = () => {setGood(good+1)}
  const badincrease = () => {setBad(bad+1)}
  const neutralincrease = () => {setNeutral(neutral+1)}

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodincrease} text='good'/>
      <Button onClick={badincrease} text='bad'/>
      <Button onClick={neutralincrease} text='neutral'/> 
      <h1>statistic</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/> 
    </div>
  )
  
}

export default App