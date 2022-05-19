import { Fetch } from "./Fetch";
import UserRepository from "./UserRepository";

/**
 * ～流れ～
 * １．rootからGithubUserに、ユーザ名loginを与える
 * ２．loginをもとにFetch.jsがデータの取得を試みる
 * ３．成功時には、Fetchに渡したコールバックが呼び出される
 * ４．コールバック内ではさらに、loginをもとにしたユーザのリポジトリの取得を試みる
 * ５．再びFetch.jsによって、データの取得がなされ、RepoMenuにそのままデータを渡す
 * ６．useIteratorによって、複数のリポジトリを切り替え表示するようにしている
 */
export default function GithubUser({login}) {
    return (
        <Fetch 
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDetails}
        />
    )
}

const UserDetails = data => {
    return (
        <>
            <div>
                <img src={data.avatar_url} alt={data.login} width={200} />
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
            <UserRepository 
                login={data.login}
            />
        </>
    )
}
