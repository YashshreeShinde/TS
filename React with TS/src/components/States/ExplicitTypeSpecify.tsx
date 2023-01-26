import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}


// Here as we dont know the value of the state initially so we dont assign anything(null) but we know that later the type should be "Auth" so we specify it in <>
//So we need to always check if the state value exists with ?
export const ExplicitType1 = () => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const handleLogin = () => {
    setUser({
      name: 'yashshree',
      email: 'yashshree@example.com'
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
    </div>
  )
}