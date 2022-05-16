import Motion27 from "../Motion27";
import Star from "./Star";

export default function Color({id,title,color,onRemove = f => f}) {
    
    return (
        <article>
            <h1 style={{marginRight:"2rem"}}>{title}</h1>
            <button style={{backgroundColor:"transparent",border:"none"}} onClick={() => onRemove(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </button>
            <div style={{height:50,backgroundColor:color}}></div>
            <Motion27 />
        </article>
    )
}