import React, {useState} from 'react'

const Boxes = () => {
  // const squares = ['#f50018', '#006ef5', '‹#00f531']
  const [squares, setSquares] = useState([])
  const [newSquare, setNewSquare] = useState({color: "", dimensions: ""})
  

  // Esta es la forma de actualizar OBJETOS con el state
  const onChangeHandler = ({target:{value, name}}) => {
    const newObject = {}
    newObject[name] = value
    setNewSquare({...newSquare, ...newObject})
  }
  
  // Esta es la forma de actualizar ARREGLOS con el state
  const addButton = e => {
    e.preventDefault()
    setSquares([...squares, newSquare])

    // Bonus ninja
    setNewSquare({color: "", dimensions: ""})
  }
  

  return (
    <div>
      <form onSubmit={addButton}>
        <div>
          <label>Color</label>
          <input value={newSquare.color} name="color" onChange={onChangeHandler} type="text"/>
        </div>
        <div>
          <label>Dimensiones</label>
          <input value={newSquare.dimensions || ""} name="dimensions" onChange={onChangeHandler} type="number"/>
        </div>
        <input type="submit" value="Add Box" />
      </form>
      <div style={{display: "flex", flexWrap: 'wrap'}}>
        {squares.map(({color, dimensions}, key) => {
          const style = {backgroundColor: color, height: +dimensions, width: +dimensions, margin: 20}
          return <div key={key} style={style} />
        })}
      </div>
    </div>
  )
}

export default Boxes