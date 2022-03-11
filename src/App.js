import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
// import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { FaSalesforce } from 'react-icons/fa'
// import About from './components/About'

const App = () => {
  const funQ = false
  const titleApp = 'Task Tracker Application'
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])
  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3001/tasks')
    const data = await res.json()
    return data
  }

//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

// toggle reminder  

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: 
        !task.reminder } : task
      )
    )
  }

  return (
    <Router>
      <div className='appContainer'>

        <Header title={titleApp} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}

       {/* <h1>Below you can have fun with Tasks</h1> */}

        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder}/> : 'no tasks :)' }

        <h2>Made by Richard Brown {funQ ? 'yes' : ''} </h2>

      </div>
    </Router>
  )
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className='appClassContainer'>
//     <h1>Hello from a class.</h1>
//     </div>
//     )
//   }
// }

export default App