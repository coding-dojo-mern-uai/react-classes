import React, {useState, useEffect} from 'react'

const Todos = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const [completedTasks, setCompletedTasks] = useState([])

  // Poder ejecutar código apenas se monta el componente
  // TODO: Ordenar el codigo y terminar con las tareas completadas
  useEffect(() => {
    if(!localStorage.getItem("localTasks")) return
    setTasks([...JSON.parse(localStorage.getItem("localTasks"))])
  }, [])
  
  // Ejecutar codigo cuando cambia un state
  useEffect(() => localStorage.setItem('localTasks', JSON.stringify(tasks)), [tasks]) 

  // Ejecutar codigo cuando cambia un state
  useEffect(() => localStorage.setItem('localCompletedTasks', JSON.stringify(completedTasks)), [completedTasks]) 
  
  const onChangeHandler = ({target: {value}}) => setNewTask(value)
  
  const addTask = (e) => {
    e.preventDefault()
    setTasks([...tasks, newTask])
  }
  // Indice buscar elemento y borrarlo
  // Copiar el arreglo completo sin el elemento
  // TODO: Eliminar con splice NO es el deber ser
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  const removeTask = (key) => {
    // Actulización de variable
    tasks.splice(key, 1)
    const newTasksArray = [...tasks]
    setTasks(newTasksArray)
  }

  // cambiar style
  // tomar las que esten check
  // completedTasks
  
  return (
    <div>
      <div>
        {tasks.map((task, key) => {
          if(completedTasks.includes(task)){ 
            return (
              <div key={key}>
                <s >{task}</s>
              </div>
            )
          }
          return (
            <div key={key}>
              <p>{task}</p>
              <input onChange={() => setCompletedTasks([...completedTasks, task])} type="checkbox" />
              <button onClick={() => removeTask(key)}>Delete Task</button>
            </div>
          )
        })}
      </div>
      <form onSubmit={addTask}>
        <div>
          <input onChange={onChangeHandler} type="text"/>
        </div>
        <div>
          <input type="submit" value="Add Task"/>
        </div>
      </form>
    </div>
  )
}

export default Todos