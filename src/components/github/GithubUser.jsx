import { Fetch } from "./Fetch";

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
        </>
    )
}
