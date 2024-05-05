// Header Component
const Header = (props) => {
  return(
    <div>
      <h1>
        {props.course}
      </h1> 
    </div>
  )
}

// Content component 
const Content = (props) => {
  console.log(props)
  return(
    <>
      <p>
        {props.parts} {props.exercises}
      </p>
    </>
  )
}

const Total = (props)=>{
  return(
    <>
      <p>
        Number of exercises {props.exercises}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      
      <Content parts={part1} exercises={exercises1} />
      <Content parts={part2} exercises={exercises2} />
      <Content parts={part3} exercises={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3}/>
     
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

export default App