import React from "react"
import Task from "./Task"
import TaskData from "./TaskData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: TaskData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => { 
        const updatedTasks = prevState.tasks.map(task => {
            if (task.id === id) {
                return {
                  ...task,
                  completed: !task.completed
                }
            }
            return task
        })
        
        return {
            tasks: updatedTasks
        }
    })
  }
  
  render() {
    const tasks = this.state.tasks.map(item => 
      <Task 
        key={item.id} 
        item={item} 
        handleChange={this.handleChange}
      />)
        
    return (
      <div className = "task-list">
        <p>{tasks}</p>
      </div>
    )
  }

}

export default App