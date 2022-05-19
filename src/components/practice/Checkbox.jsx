import { useReducer } from "react";

const firstuser = {
    id:133,
    firstName:"Yu",
    lastName:"Nagase",
    age:14,
    email:"naasofjaofda@gjoaod.cmo",
    admin:false
}

export default function Checkbox() {
    //reducerは複数の入力値を１つの値に集約するものだが、その特性を用いてtoggle機能を実装している
    const [checked,toggle] = useReducer(checked => !checked,false)

    const [user,setUser] = useReducer((user,newUser) => ({...user,...newUser}),firstuser)

    return (
        <>
            <input 
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
            {checked ? "checked" : "not checked"}

            <section>
                <p>id: {user.id}</p>
                <p>firstname: {user.firstName}</p>
                <p>lastname: {user.lastName}</p>
                <p>age: {user.age}</p>
                <p>email: {user.email}</p>
                <p>admin: {user.admin ? "true" : "false"}</p>
                <button onClick={() => setUser({admin:true})}>change</button>
            </section>
        </>
    )
}