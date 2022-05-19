import { useEffect } from "react";
import { useIterator } from "../hooks/useIterator";
import { useHoge } from "./HogeProvider";
import RepositoryReadme from "./RepositoryReadme";

export default function RepoMenu({
    repositories,
    login
}) {
    //repository一覧のjsonからname属性のみ取り出す
    const [{name},pre,next] = useIterator(repositories,0)
    const {onSelect} = useHoge()
  
    useEffect(() => {
        if(!name) return 
        onSelect(name)
    },[name])

    return (
        <>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <button onClick={pre}>前</button>
                <p>repos_name: <mark> {name} </mark></p>
                <button onClick={next}>後</button>
            </div>
            <RepositoryReadme login={login} repo={name} />
        </>
    )
}