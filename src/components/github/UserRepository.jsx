import { Fetch } from "./Fetch"
import RepoMenu from "./RepoMenu"

export default function UserRepository({
    login
}) {
    return (
        <>
            <Fetch 
                uri={`https://api.github.com/users/${login}/repos`}
                renderSuccess={data => (
                    <RepoMenu 
                        repositories={data}
                    />
                )}
            />
        </>
    )
}