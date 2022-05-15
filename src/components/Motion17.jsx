import {motion, transform, useMotionValue, useSpring, useTransform} from "framer-motion"
import { useEffect } from "react";
import classes from "../css/style.module.css";

export default function Motion17() {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const opacity = useMotionValue(1)

    //x,yが変わるごとにコールバックを呼び出し、opacityを変更する
    useEffect(() => {
        function updateOpacity() {
            const maxXY = Math.max(x.get(), y.get())
            const newOpacity = transform(maxXY, [0, 10], [1, 0])
            opacity.set(newOpacity)
        }
        //x,yそれぞれが変化したときのコールバックを追加
        const unsubscribeX = x.onChange(updateOpacity)
        const unsubscribeY = y.onChange(updateOpacity)

        return () => {
            unsubscribeX()
            unsubscribeY()
        }
    }, [])
    

    return (
        <>
            <motion.div 
                className={classes.div_module}
                style={{x}}
                drag
                transition={{duration:5}}
                //onClick={() => {x.set(x.get()+1)}}
            />
        </>
    )
    
}