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

// Part component 
const Part = ({part, exercise})=>{
  return(
    <>
      <p>
        {part} {exercise}
      </p>
    </>
  )
}

// Content component 
const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
  return(
    <>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </>
  )
}

// Total component 
const Total = (props)=>{
  return(
    <>
      <p>
        Number of exercises {props.exercises}
      </p>
    </>
  )
}

// The root App component 
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
      <Content 
        part1={part1} exercises1={exercises1} 
        part2={part2} exercises2={exercises2} 
        part3={part3} exercises3={exercises3} 
      />

      <Total exercises={exercises1 + exercises2 + exercises3}/>
     
    </div>
  )
}

export default App