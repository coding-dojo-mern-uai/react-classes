// Hook useState
import React, { useState } from 'react'

const PersonCard = props => {
  const { lastName, firstName, age, hairColor } = props
  const [currentAge, setCurrentAge] = useState(age)

  const handleOnClick = () => setCurrentAge(currentAge + 1)

  return (
    <div>
      <h1>
        {lastName}, {firstName}
      </h1>
      <p>Age: {currentAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={() => handleOnClick()}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>
  )
}

export default PersonCard

/*
// JSX
<PersonCard firstName="Jane"/>

// JS
PersonCard({firstName: "Jane"})
*/
