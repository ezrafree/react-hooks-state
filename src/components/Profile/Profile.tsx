import { ChangeEvent, FormEvent, useContext, useState } from 'react'

import { Context, updateUser } from '../App'
import { User } from '../../models'

const Profile = () => {
  const { state, dispatch } = useContext(Context)

  const user = state.auth.user

  const [isShowingAlert, setShowingAlert] = useState(false)

  const [formData, updateFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowingAlert(true)
    const updatedUser: User = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
    }
    dispatch(updateUser(updatedUser))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const user: User = {
      ...formData,
      [e.target.name]: e.target.value.trim(),
    }
    updateFormData(user)
    dispatch(updateUser(user))
  }

  return (
    <article className="content">
      <form className="myform" onSubmit={handleSubmit}>
        <legend>Update User</legend>
        <div
          className={`alert alert-success ${
            isShowingAlert ? 'alert-shown' : 'alert-hidden'
          }`}
          onTransitionEnd={() => setShowingAlert(false)}
          style={{ color: 'rgba(255,0,0,0.75)' }}
        >
          Your profile has been updated.
        </div>
        <fieldset>
          <label htmlFor="firstName">First name:</label>
          <input
            id="firstName"
            value={user.firstName}
            type="text"
            name="firstName"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName">Last name:</label>
          <input
            id="lastName"
            value={user.lastName}
            type="text"
            name="lastName"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            value={user.username}
            type="text"
            name="username"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            value={user.email}
            type="text"
            name="email"
            onChange={handleChange}
          />
        </fieldset>
        <input type="submit" value="Save Changes" />
      </form>
    </article>
  )
}

export default Profile
