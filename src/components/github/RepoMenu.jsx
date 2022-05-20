import { useEffect } from "react";
import { useIterator } from "../hooks/useIterator";
import { useGitInfo } from "./GitInfoProvider";

export default function RepoMenu({
    repositories
}) {
    //repository一覧のjsonからname属性のみ取り出す
    const [{name},pre,next] = useIterator(repositories,0)
    const {updateRepo} = useGitInfo()
  
    useEffect(() => {
        if(!name) return 
        updateRepo(name)
    },[name])

    return (
        <>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <button onClick={pre}>前</button>
                <p>repos_name: <mark> {name} </mark></p>
                <button onClick={next}>後</button>
            </div>
        </>
    )
}