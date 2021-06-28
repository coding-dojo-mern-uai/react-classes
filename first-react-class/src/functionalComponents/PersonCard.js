import React, { useState } from 'react'

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props
  const [dynamicAge, setDynamicAge] = useState(age)

  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>Hair color: {hairColor}</p>
      <p>Age: {dynamicAge}</p>
      <button onClick={() => setDynamicAge(dynamicAge + 1)}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>
  )
}

export default PersonCard
