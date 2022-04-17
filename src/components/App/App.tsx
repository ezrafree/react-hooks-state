import { Routes, Route } from 'react-router-dom'

import { Layout, Profile, Tasks } from '../'

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/tasks"
          element={
            <Layout>
              <Tasks />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Routes>
    </div>
  )
}
