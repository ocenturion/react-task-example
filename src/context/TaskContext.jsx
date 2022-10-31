import {createContext, useState, useEffect} from 'react'
import { task as data } from "../data/task";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTask] = useState([]);
    let x=20


  function createTask(task) {
    setTask([...tasks, {
      title: task.title,
      id: tasks.length,
      descripcion: task.descripcion
    }])
  }

  function deleteTask(id) {
    setTask(tasks.filter(x => x.id !== id))
  }


  useEffect(() => {
    setTask(data)
  }, [])

  return (
    <TaskContext.Provider value={{
        tasks,
        deleteTask,
        createTask
    }}>{props.children}</TaskContext.Provider>
  )
}
