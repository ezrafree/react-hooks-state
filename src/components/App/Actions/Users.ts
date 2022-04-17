import { AppAction, ActionTypes } from '../Types'
import { User } from '../../../models'

export const updateUser = (user: User): AppAction => ({
  type: ActionTypes.UPDATE_USER,
  user,
})
