import {motion, transform, useDragControls, useMotionValue, useSpring, useTransform} from "framer-motion"
import { useEffect } from "react";
import classes from "../css/style.module.css";

export default function Motion18() {

    return (
        <>
            <motion.div
                className={classes.div_module2}
                style={{x:500}}
                animate={{rotate:360}}
                whileHover={{scale:3}}
                transition={{type:"tween",stiffness:400,repeat:Infinity,repeatDelay:2,repeatType:"reverse"}}
            />
            <motion.ul
                style={{backgroundColor:"blueviolet",width:"10%"}} 
                initial={{ '--rotate': '0deg' }} //cssを事前定義して、子要素に渡すことができる
                animate={{ '--rotate': '360deg' }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay:2}}
            >
                <li style={{ transform: 'rotate(var(--rotate))' }} >list子</li>
                <li style={{ transform: 'rotate(var(--rotate))' }} >list子</li>
                <li style={{ transform: 'rotate(var(--rotate))' }} >list子</li>
            </motion.ul>

            <motion.div
                className={classes.div_module2}
                style={{ x: 0, rotate: 180}}
                transformTemplate={
                    ({ x, rotate }) => `rotate(${rotate}deg) translateX(${x}px)`//速いけど一応できてる
                }
            />
        </>
    )
    
}