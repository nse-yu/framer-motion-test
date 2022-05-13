import {motion} from "framer-motion"
import { useState } from "react"


export default function Motion11(props) {
    const [onRight,setOnRight] = useState(false);
    const anim = {x: 100}

    //TODO:transitionのlayoutによる効果を検証したかったが、保留
    return (
        <motion.div
            style={props.design}
            initial={{
                x: 0
            }}
            animate={onRight ? {width:500} : anim}
            transition={{
                duration:2,
                layout:{duration:10}
            }}    
            onClick={() => setOnRight(() => !onRight)}
        >

        </motion.div>
    )
}