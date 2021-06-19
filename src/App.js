import React from 'react';

const Header = (props)=>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
    )
  }

  const Content = (props)=>{
    return(
      <div>
        <p>{props.part1}</p>
        <p>{props.part2}</p>
        <p>{props.part3}</p>
      </div>
      )
  }

  const Total = (props)=>{
    return(
      <div>
         <p>Number of excercises {props.exc1 + props.exc2 + props.exc3}</p>
      </div>
      )
  }

const App =()=>{
  const course = 'Half Stack application development'
  const part1='Fundamentals of React'
  const excercises1 = 10
  const part2= 'Using props to pass data'
  const excercises2 = 7
  const part3 = 'State of a component'
  const excercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3} />
      <Total exc1 = {excercises1} exc2={excercises2} exc3= {excercises3}/>
     
    </div>
    )
}

export default App