import { useContext } from "react"
import { createContext } from "react"
import UserRepository from "./UserRepository"

const HogeContext = createContext()
export const useHoge = () => useContext(HogeContext)

export default function HogeProvider({children}) {
    const onSelect = repoName => {
        console.log(repoName, "selected.")
    }

    return (
        <HogeContext.Provider 
            value={{onSelect}}
        >
            {children}
        </HogeContext.Provider>
    )
}