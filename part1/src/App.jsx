const Header = ({course}) => {

  return <h1>{course}</h1>
}

const Part1 = ({part1, exercises1}) => {
  return(
    <p>
    {part1} {exercises1}
  </p>
  )
  
}

const Part2 = ({part2, exercises2}) => {
  return(
    <p>
    {part2} {exercises2}
  </p>
  )
  
}

const Part3 = ({part3, exercises3}) => {
  return (
    <p>
    {part3} {exercises3}
  </p>
  )
  
}

const NumberOfExercice = ({exercises1, exercises2, exercises3}) => {
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
  
}

const App = () => {
console.log("laaaaaaaaaaaaaaaa")

  return (
    <div>
      <Header course = 'Half Stack application development'/> 
      <Part1 part1 = 'Fundamentals of React' exercises1={10} />
      <Part2 part2 = 'Using props to pass data' exercises2={7} />
      <Part3 part3 = 'State of a component' exercises3={14} />
      <NumberOfExercice exercises1={10} exercises2={7} exercises3={14}/>


    </div>
  )
}

export default App