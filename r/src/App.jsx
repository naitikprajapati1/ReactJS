import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <div>App</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App