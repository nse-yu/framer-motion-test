import { useState } from "react";

export default function WebRequest() {
    const [response,setResponse] = useState({})
    const [file,setFile] = useState("")

    function sendFile(e){
        e.preventDefault()

        const form = new FormData()
        form.append("file",file)
        fetch("http://localhost:8080/multipart",{
            method:"POST",
            body:form
        })
        .then(res => res.json())
        .then(val => setResponse(val))
        .catch(console.err)
    }

    return (
        <>
            <form action="http://localhost:8080/multipart" method="POST" onSubmit={sendFile}>
                <input type="file" name="file" value={file} onChange={e => setFile(e.target.value)}/>
                <button>send</button>
            </form>
            <div>{response.file}</div>
        </>
    )
}