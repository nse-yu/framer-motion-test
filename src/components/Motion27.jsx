import { useState } from "react";
import Star from "./practice/Star";

export default function Motion27({num = 5}) {
    const [count,setCount] = useState(0)
    const selected = (starred) => {
        setCount(current => starred ? current+1 : current-1)
    }    

    return (
        <>
            <section style={{display:"flex",alignItems:"center"}}>
                <div>
                    {
                        [...Array(num)].map((n,index) => (
                            <Star key={index} clicked={selected}/>
                        ))
                    }
                </div>
                <p><b>{count}</b> star was selected.</p>
            </section>
        </>
    )
}