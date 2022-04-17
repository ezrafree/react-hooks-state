import { Dispatch } from 'react'

import * as models from '../../models'

export type AppState = {
  auth: {
    error?: Error
    isAuthenticated: boolean
    isLoading: boolean
    login: (email: string, password: string) => void
    logout: () => Promise<void>
    user: models.User
  }
  tasks: models.Task[]
}

export enum ActionTypes {
  UPDATE_USER = 'updateUser',
  ADD_TASK = 'addTask',
  DELETE_TASK = 'deleteTask',
}

export type AppAction =
  | {
      type: ActionTypes.UPDATE_USER
      user: models.User
    }
  | {
      type: ActionTypes.ADD_TASK
      task: models.Task
    }
  | {
      type: ActionTypes.DELETE_TASK
      id: string
    }

export type AppContext = {
  state: AppState
  dispatch: Dispatch<AppAction>
}
