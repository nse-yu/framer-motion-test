import style from "../css/style.module.css";
import {motion, useMotionValue, useTransform} from 'framer-motion'
import { useEffect } from "react";

export default function Motion24() {
    const opacity = useMotionValue(0);
    const y = useMotionValue(0);
    const gradation = useTransform(y,[0,-500],["#e6e6fa","#00bfff"])
    useEffect(() => {
        y.onChange(latest => {console.log(latest)})
        opacity.onChange(latest => {console.log(latest)})
    },[])

    return (
        <>
            <svg width="1000px" height="100px" viewBox="0 0 1000 100" strokeLinecap="round">
                <motion.path 
                    strokeWidth="2"
                    d="M 20 20 H 500" //length 30
                    stroke="#000000"
                    fill="none"
                    strokeDasharray="0 1"
                    pathLength="0"
                />
                <motion.path 
                    strokeWidth="2"
                    d="M 20 40 H 500" //length 30
                    stroke="#ffffff"
                    fill="none"
                />
            </svg>
            <motion.div 
                className={style.div_module}
                style={{opacity,y,x:400,backgroundColor:gradation}}
                drag="y"
                animate={{opacity:1}}
                transition={{duration:6}}
            />
        </>
    )
}