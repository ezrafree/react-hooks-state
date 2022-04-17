import { AppAction, AppState } from '../Types'

export const addTask = (state: AppState, action: AppAction) => ({
  ...state,
  tasks: [...state.tasks, action['task' as keyof AppAction]],
})

export const deleteTask = (state: AppState, action: AppAction) => ({
  ...state,
  tasks: [
    ...state.tasks.filter(
      (task) => task.id !== action['id' as keyof AppAction],
    ),
  ],
})
