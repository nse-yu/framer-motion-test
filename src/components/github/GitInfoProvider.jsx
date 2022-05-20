import { useContext, useState } from "react"
import { createContext } from "react"

const HogeContext = createContext()
export const useGitInfo = () => useContext(HogeContext)

export default function GitInfoProvider({children}) {
    //admin states
    const [login,setLogin] = useState()
    const [repo,setRepo] = useState()

    //admin methods
    const updateLogin = newlogin => {
        setLogin(() => newlogin)
    }
    const updateRepo = newrepo => {
        setRepo(() => newrepo)
    }

    return (
        <HogeContext.Provider 
            value={{login,repo,updateLogin,updateRepo}}
        >
            {children}
        </HogeContext.Provider>
    )
}