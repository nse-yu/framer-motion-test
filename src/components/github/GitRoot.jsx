import GithubUser from "./GithubUser"
import { useGitInfo } from "./GitInfoProvider"
import GitSearchForm from "./GitSearchForm"
import RepositoryReadme from "./RepositoryReadme"
import UserRepository from "./UserRepository"

/**
 * ～流れ～
 * １．rootからGithubUserに、ユーザ名loginを与える
 * ２．loginをもとにFetch.jsがデータの取得を試みる
 * ３．成功時には、Fetchに渡したコールバックが呼び出される
 * ４．コールバック内ではさらに、loginをもとにしたユーザのリポジトリの取得を試みる
 * ５．再びFetch.jsによって、データの取得がなされ、RepoMenuにそのままデータを渡す
 * ６．useIteratorによって、複数のリポジトリを切り替え表示するようにしている
 */

/**
 * 発生しうる問題：アンマウントによるエラー
 * このコンポーネントが返す複数のコンポーネントは、フォーム以外はすべてlogin情報に依存しており、
 * login情報がなければアンマウント（不描画）される。
 * 一度、login情報が与えられると、すべてのコンポーネントが一斉にgit apiへとリクエスト&取得を開始し、
 * マウントされる。
 * しかし、悪いネットワーク状況では、login情報を与えてからマウントされるまでに長い時間を要する可能性があり、
 * もし、その間にユーザがlogin情報を空にすれば、アンマウントされたコンポーネントに取得情報を流し込もうとしてエラーが発生する。
 * このエラーを防ぐためには、コンポーネントがアンマウントしているのかを検出する機能が必要である。
 */

export default function GitRoot() {
    const {login,repo} = useGitInfo()

    return (
        <>
            <GitSearchForm />
            {login &&
            <GithubUser login={login}/>
            }
            {login &&
            <UserRepository login={login}/>
            }
            {login && repo &&
            <RepositoryReadme login={login} repo={repo}/>
            }
        </>
    )
}