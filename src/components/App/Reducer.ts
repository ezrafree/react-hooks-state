import { AppAction, AppState, ActionTypes } from './Types'
import * as reducers from './Reducers'

export const initialState = {
  auth: {
    error: undefined,
    isAuthenticated: false,
    isLoading: false,
    user: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
    },
    login: () => void 0,
    logout: () => Promise.resolve(),
  },
  tasks: [],
}

export const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER:
      return reducers.updateUser(state, action)
    case ActionTypes.ADD_TASK:
      return reducers.addTask(state, action) as AppState
    case ActionTypes.DELETE_TASK:
      return reducers.deleteTask(state, action)
    default:
      throw new Error(`Unknown action type ${action['type']}`)
  }
}
