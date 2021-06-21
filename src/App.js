import React from 'react';

const Header = (props)=>{
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
    )
  }

  const Content = (props)=>{
    return(
      <div>
        <p>{props.course.parts.[0].name}</p>
        <p>{props.course.parts.[1].name}</p>
        <p>{props.course.parts.[2].name}</p>
      </div>
      )
  }

  const Total = (props)=>{
    return(
      <div>
         <p>Number of excercises {props.course.parts.[0].excercises1 + props.course.parts.[1].excercises2 + props.course.parts.[2].excercises3}</p>
      </div>
      )
  }

const App =()=>{
  const course = {
  name: 'Half Stack application development',
  parts:[
    {
       name: 'Fundamentals of React',
       excercises1 : 10
    },
    {
       name:'Using props to pass data',
       excercises2 : 7
  },
   {
      name:'State of a component',
      excercises3 : 14
  }
  ]
  }


  return (
    <div>
      <Header course = {course}/>
      <Content  course={course}/>
      <Total  course={course}/>
    </div>
    )
}

export default App