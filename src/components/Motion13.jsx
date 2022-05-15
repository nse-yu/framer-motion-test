import {motion} from "framer-motion"
import { useState } from "react"

export default function Motion13(props) {
    
    const [coord,setCoord] = useState([0,0]);

    return (
        <>
            <motion.button
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
            >ボタン</motion.button>
            <motion.div 
                style={props.design}
                onPan={(evt,info) => setCoord(() => [info.point.x,info.point.y])}
            />
            <div>{coord[0]}</div>
            <div>{coord[1]}</div>

            <motion.div
                style={props.design}
                drag
                dragTransition={{max:500,bounceStiffness: 1000}}
            >
                <motion.div 
                    style={props.child}
                    drag
                />
            </motion.div>
        </>
    )
    
}