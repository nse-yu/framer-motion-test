import { useEffect } from "react";
import {animate, motion, useMotionValue} from "framer-motion";

export default function Motion9(props) {
    /**
     * animate()：単一の値・MotionValueをアニメーションする
     * from         アニメーションの初期値としてのMotionValueもしくは値
     * to           アニメーションの到達値としての値もしくは配列
     * transition   「spring or tween」や「ライフサイクルメソッド」をオブジェクトで
     * 
     * ※コントロールを返すため、それを「start」や「stop」として返すことができる。
     */
     const x = useMotionValue(0)

    let controls = useEffect(() => {
       const controls = animate(x, 100, {
         type: "spring",
         stiffness: 2000,
         onComplete: v => {}
       })
     
       return controls.stop
     })

    return (
        <motion.div style={props.design} animate={controls}/>
    )
}