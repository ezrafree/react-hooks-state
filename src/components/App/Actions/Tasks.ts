import { AppAction, ActionTypes } from '../Types'
import { Task } from '../../../models'

export const addTask = (task: Task): AppAction => ({
  type: ActionTypes.ADD_TASK,
  task,
})

export const deleteTask = (id: string): AppAction => ({
  type: ActionTypes.DELETE_TASK,
  id,
})
