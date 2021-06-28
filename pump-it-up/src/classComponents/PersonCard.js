import React from 'react'

class PersonCard extends React.Component {
  // Props es un atributo que viene de la clase Component
  constructor(props) {
    super(props)
    this.state = { currentAge: null }
  }

  // Método propio
  handleOnClick() {
    // Desconstrucción
    const {
      props: { age },
      state: { currentAge }
    } = this

    // Ternary Operation
    // const initialAge = !currentAge ? age : currentAge
    const initialAge = currentAge || age
    this.setState(() => ({ currentAge: initialAge + 1 }))
  }
  z
  // Método heredado
  render() {
    console.log(this)
    // Destructuramos el prop
    const { lastName, firstName, age, hairColor } = this.props
    const { currentAge } = this.state
    return (
      <div>
        <h1>
          {lastName}, {firstName}
        </h1>
        <p>Age: {currentAge || age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={() => this.handleOnClick()}>
          Birthday Button for {firstName} {lastName}
        </button>
      </div>
    )
  }
}

/*
// JSX
<PersonCard firstName="Jane"/>

// JS
new PersonCard({firstName: "Jane"})
new PersonCard({firstName: "John"})
new PersonCard({firstName: "Millard"})
new PersonCard({firstName: "Maria"})
*/

export default PersonCard
