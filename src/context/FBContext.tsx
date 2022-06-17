import React, { createContext } from "react"

export const UserContext = React.createContext('');

export default function App() {
    return (
        <UserContext.Provider value="ligt">
        
        </UserContext.Provider>
    )
}