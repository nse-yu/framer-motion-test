import { useEffect } from "react";
import { useState } from "react";

export function useFetch(uri){
    const [data,setData] = useState()
    const [error,setError] = useState()
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        if(!uri) return //uri指定がない場合

        fetch(uri)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    },[uri]) //新規uriごとにリクエスト送信

    return {
        loading,
        data,
        error
    }
}