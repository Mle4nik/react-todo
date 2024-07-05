import { useState } from "react"
import AddTodo from "./components/AddTodo";
import ListItem from "./components/ListItem";
// import SortItems from "./components/SortItems";

let nextId = JSON.parse(localStorage.getItem("taskId"));

function App() {
  let initialTasks = [
    { id: 0, title: 'first task', seen: false },
    { id: 1, title: 'second task', seen: true },
    { id: 2, title: 'third task', seen: false }
  ]

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("todolist")) || [])
  // const [currentTasks, setCurrentTasks] = useState(tasks)
  const [now, setNow] = useState(new Date())

  function addEnterTasks(event) {
    if (event.key === 'Enter' && event.target.value.length != 0) {
      setNow(new Date())
      let nextTasks = [
        ...tasks,
        {
          id: nextId++,
          title: event.target.value,
          seen: false,
          created: now.toLocaleString("en-US")
        }
      ]
      event.target.value = ''
      setTasks(nextTasks)
      localStorage.setItem("todolist", JSON.stringify(nextTasks))
      localStorage.setItem("taskId", JSON.stringify(nextId))
    }
  }

  function addTasks(task) {
    if (task.length != 0) {
      setNow(new Date())
      let nextTasks = [
        ...tasks,
        {
          id: nextId++,
          title: task,
          seen: false,
          created: now.toLocaleString("en-US")
        }
      ]

      setTasks(nextTasks)
      localStorage.setItem("todolist", JSON.stringify(nextTasks))
      localStorage.setItem("taskId", JSON.stringify(nextId))
    }
  }

  function deleteTasks(taskId) {
    let nextTasks = tasks.filter(task => {
      return task.id !== taskId
    })

    setTasks(nextTasks)
    localStorage.setItem("todolist", JSON.stringify(nextTasks))
  }

  function checkedTasks(taskId, taskSeen) {
    let nextTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, seen: taskSeen }
      } else {
        return task
      }
    })

    setTasks(nextTasks)
    localStorage.setItem("todolist", JSON.stringify(nextTasks))
  }

  function changeTitle(taskId, newTitle) {
    let nextTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, title: newTitle }
      } else {
        return task
      }
    })

    setTasks(nextTasks)
    localStorage.setItem("todolist", JSON.stringify(nextTasks))
  }

  // function sortTasks(taskValue) {
  //   if (taskValue === 'All') {
  //     setCurrentTasks(tasks.filter(el => {
  //       return el
  //     }))
  //   } else if (taskValue === 'Processed') {
  //     setCurrentTasks(tasks.filter(el => {
  //       return el.seen === false
  //     }))
  //   } else {
  //     setCurrentTasks(tasks.filter(el => {
  //       return el.seen === true
  //     }))
  //   }
  // }

  return (
    <div className="mobile:w-11/12 m-auto">
      <h1 className="mobile:text-5xl font-extrabold text-purple-400 text-center mobile:mt-7 my-7">
        TODO APP
      </h1>

      <AddTodo addTasks={addTasks} addEnterTasks={addEnterTasks} />
      {/* <SortItems sortTasks={sortTasks} /> */}

      <ListItem tasks={tasks} deleteTasks={deleteTasks} checkedTasks={checkedTasks} changeTitle={changeTitle} />
    </div>
  )
}

export default App
