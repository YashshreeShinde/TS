import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}


//When we give garantee to TS that after loading on page the state would have value and it would be of type AuthUser .
//So no need to explicitly check if state value exists using "user?"
export const ExplicitType2 = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'yashshree',
      email: 'yashshree@example.com'
    })
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      
      <div>User name is {user?.name}</div>
    </div>
  )
}