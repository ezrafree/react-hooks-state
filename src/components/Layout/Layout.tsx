import { NavLink } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <>
      <main>
        <ul>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
        </ul>
        {props.children}
      </main>
    </>
  )
}

export default Layout
