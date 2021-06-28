import './App.css'
// Class Components
// import Div from './classComponents/Div'
// import Welcome from './classComponents/Welcome'
// import Timer from './classComponents/Timer'
// import Button from './classComponents/Button'
// import Logger from './classComponents/Logger'

// Functional Components
// import Counter from './functionalComponents/Counter'
import PersonCard from './functionalComponents/PersonCard'

function App() {
  const persons = [
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 36,
      hairColor: 'brown'
    }
  ]

  return (
    <div>
      <h1>Apoyalo Task</h1>
      {persons.map(person => (
        <PersonCard {...person} />
      ))}
      <hr />
    </div>
  )
}

export default App
