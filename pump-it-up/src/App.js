// Importando const PersonCard del archivo ./classComponents/PersonCard
// import PersonCard from './classComponents/PersonCard'
import PersonCard from './functionalComponents/PersonCard'

function App() {
  const persons = [
    { firstName: 'Jane', lastName: 'Doe', age: 20, hairColor: 'Black' },
    { firstName: 'Smith', lastName: 'Joe', age: 88, hairColor: 'Brown' },
    { firstName: 'Fillmord', lastName: 'Millard', age: 50, hairColor: 'Brown' },
    { firstName: 'Smith', lastName: 'Maria', age: 62, hairColor: 'Brown' }
  ]
  return (
    <div>
      {persons.map((person, index) => (
        <PersonCard key={index} {...person} />
      ))}

      {/* <PersonCard firstName="Jane" lastName="Doe" age={20} hairColor="Black" />
      <PersonCard firstName="Smith" lastName="Joe" age={88} hairColor="Brown" />
      <PersonCard firstName="Fillmord" lastName="Millard" age={50} hairColor="Brown" />
      <PersonCard firstName="Smith" lastName="Maria" age={62} hairColor="Brown" /> */}
    </div>
  )
}

export default App
