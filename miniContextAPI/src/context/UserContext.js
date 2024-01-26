import React from 'react'
// * 1
const UserContext = React.createContext(null)
// * 2
// we can also add default value of context states
// const UserContext = React.createContext({
//     user: "naitik",
// })
// create context
// context give the provider

export default UserContext;