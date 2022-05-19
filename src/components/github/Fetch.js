import { useFetch } from "../hooks/useFetch";
import PropTypes from "prop-types"
import { useHoge } from "./HogeProvider";

export const Fetch = ({
    uri,
    renderSuccess,
    loadingFallback = <p>loading...</p>,
    renderError = error => (<pre>{JSON.stringify(error,null,2)}</pre>)    
}) => {
    const {loading,data,error} = useFetch(uri)
    if(loading) return loadingFallback
    if(error) return renderError(error)
    if(data) return renderSuccess(data)
}

Fetch.proptypes = {
    renderSuccess:PropTypes.func.isRequired,
    renderError:PropTypes.func
}