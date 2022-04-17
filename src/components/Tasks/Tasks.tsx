import { useContext, useState, FormEvent, ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Task } from '../../models'
import { Context, addTask, deleteTask } from '../App'

const Tasks = () => {
  const initialTask = {
    id: '',
    name: '',
  }

  const { state, dispatch } = useContext(Context)

  const [taskToAdd, setTaskToAdd] = useState<Task>(initialTask)

  const [isShowingAlert, setShowingAlert] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskToAdd({
      id: uuidv4(),
      name: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowingAlert(true)
    dispatch(addTask(taskToAdd))
    setTaskToAdd(initialTask)
  }

  const deleteAction = (id: string): void => {
    dispatch(deleteTask(id))
  }

  return (
    <article className="content">
      <div
        style={{
          padding: '0.25rem 1rem',
        }}
      >
        {state.tasks.map((task, index) => {
          return (
            <p key={index}>
              {index + 1}. {task.name}{' '}
              <button onClick={() => deleteAction(task.id)}>&#10006;</button>
            </p>
          )
        })}
      </div>
      <form className="myform" onSubmit={handleSubmit}>
        <legend>Add Task</legend>
        <div
          className={`alert alert-success ${
            isShowingAlert ? 'alert-shown' : 'alert-hidden'
          }`}
          onTransitionEnd={() => setShowingAlert(false)}
          style={{ color: 'rgba(255,0,0,0.75)' }}
        >
          Your task has been added.
        </div>
        <fieldset>
          <label htmlFor="taskName">Task name: </label>
          <input
            id="taskName"
            type="text"
            name="name"
            value={taskToAdd.name}
            onChange={handleChange}
          />
        </fieldset>
        <input type="submit" value="Add" />
      </form>
    </article>
  )
}

export default Tasks
