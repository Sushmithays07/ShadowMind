import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

const [userData,setUserData] = useState({
emotion:3,
study:2,
social:1,
entertainment:1,
interests:[]
})



return(

<UserContext.Provider value={{userData,setUserData}}>
{children}
</UserContext.Provider>

)

}

