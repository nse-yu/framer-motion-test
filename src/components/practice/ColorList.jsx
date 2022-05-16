import { useContext } from "react"
import { ColorContext } from "./ColorProvider"
import Color from "./Color"

export default function ColorList() {
    const {colors,removeColor} = useContext(ColorContext)
    
    return (
        <section style={{padding:"2rem"}}>
            {
                !colors.length ? 
                <div>No Colors Listed.</div> 
                : 
                <div>
                    {colors.map(color => <Color key={color.id} {...color} onRemove={removeColor}/>)}
                </div>
            }
        </section>
    )
}