import React, { useState } from 'react'

const AuthContext = React.createContext({
  userObj: {},
  setUserObj: () => {}
})

export default AuthContext

export const AuthContextProvider = props => {
  const [userObj, setUserObj] = useState({})
  return (
    <AuthContext.Provider
      value={{
        userObj,
        setUserObj
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
