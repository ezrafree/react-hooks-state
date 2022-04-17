import { AppAction, AppState } from '../Types'

export const updateUser = (state: AppState, action: AppAction) => {
  return {
    ...state,
    auth: {
      ...state.auth,
      ...action,
    },
  }
}
