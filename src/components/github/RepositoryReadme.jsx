import ReactMarkdown from "react-markdown";
import { useCallback,useState,useEffect } from "react";

export default function RepositoryReadme({
    repo,login
}) {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState()
    const [markdown,setMarkdown] = useState("")

    /**
     * async付きメソッドで非同期処理を有効化し、準備完了したらawait付きfetchでデータ取得
     */
    const loadReadme = useCallback(async (login,repo) => {
        let uri = `https://api.github.com/repos/${login}/${repo}/readme`
        const {download_url} = await fetch(uri).then(res => res.json()) //README.mdファイルのダウンロードURLを抽出

        const markdown = await fetch(download_url).then(res => res.text())//README.mdファイルの内容をダウンロード
        setMarkdown(markdown)
        setLoading(false)
    },[])

    useEffect(() => {
        if(!repo || !login) return //readmeを読みだすための情報がない
        loadReadme(login,repo).catch(setError) //catchした例外を設定
    },[repo]) //リポジトリ単位での依存

    if(error) return <pre>{JSON.stringify(error,null,2)}</pre>
    if(loading) return <p>Loading...</p>

    return (
        <ReactMarkdown children={markdown} />
    )
}