import style from "../css/style.module.css";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import { useEffect } from "react";

export default function Motion26() {
    const controls = useAnimation()
    const [ref,inView] = useInView()

    const variants = {
        out:{
            opacity:0
        },
        in:{
            opacity:1,
            transition:{
                type:"spring",
                duration:"0.8",
                delay:"0.4"
            }
        }
    }
    useEffect(() => {
        console.log(inView)
        if(inView){
            controls.start("in")
        }else{
            controls.start("out")
        }
    },[controls,inView])
    return (
        <>
            <motion.div
                className={style.div_module2}
                ref={ref}
                animate={controls}
                variants={variants}
            />
        </>
    )
}