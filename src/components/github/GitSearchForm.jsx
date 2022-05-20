import { useGitInfo } from "./GitInfoProvider"
import {motion} from "framer-motion"

export default function GitSearchForm() {
    const {login,updateLogin} = useGitInfo()
    const users = [...["nse-yu","hoge","piyo"]]

    const changed = e => {
        if(!e.target.value) return
        updateLogin(e.target.value)
    }

    return (
        <> 
            <h2>ユーザ名を入力してください</h2>
            <form onChange={changed}>
                {users.map((usr,index) => (
                    <div><input type="radio" name="users" key={index} value={usr} />{usr}</div>    
                ))}
            </form>
        </>
    )
}