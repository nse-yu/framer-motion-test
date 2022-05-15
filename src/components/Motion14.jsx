import {motion, useDragControls} from "framer-motion"
import { useState } from "react"

export default function Motion14(props) {
    const dragControls = useDragControls();
    function startDrag(ev){
        dragControls.start(ev,{snapToCursor:true});
    }

    return (
        <>
            <div style={{width:100,height:20,backgroundColor:"black"}} onPointerDown={startDrag}/>
            <motion.div style={props.design} drag="x" dragControls={dragControls} dragListener={false}/>        
        </>
    )
    
}