import style from "../css/style.module.css";
import {motion, useMotionValue, useTransform} from 'framer-motion'
import { useEffect } from "react";

export default function Motion23() {
    const x = useMotionValue(0) //変化する値
    const background = useTransform(
        x,
        [-20,0,20], //xの変化幅
        //ピンク 紫　緑
        ["#ff008c", "#7700ff", "rgb(166, 255, 0)"] //変化に応じた出力
    )
    const stroke1 = useTransform(
        x,
        [-20,-10,0],
        ["#ff008c", "#7700ff","#ffffff"]
    )
    const stroke2 = useTransform(
        x,
        [0,20],
        ["#ffffff","rgb(166, 255, 0)"]
    )
    const tickPath = useTransform(x, [0, 100], [0, 1]);
    const crossPathA = useTransform(x, [-10, -55], [0, 1]);
    const crossPathB = useTransform(x, [-50, -100], [0, 1]);

    useEffect(() => {
        x.onChange(latest => {console.log(latest,crossPathA.get())})
    },[])

    return (
        <>
        {console.log(x.current)}
            <motion.div
                className={style.canvas}
                style={{background}}
            >
                <motion.div
                    className={style.backgroundSwitch}
                    drag="x"
                    style={{x}}
                    dragConstraints={{right:0,left:0}}
                >
                    <svg width="100px" height="100px" viewBox="0 0 100 100" strokeLinecap="round">
                        <motion.circle 
                            cx="50" cy="50" r="28" 
                            stroke={background} 
                            strokeWidth="2" 
                            fill="transparent"
                        />
                        <motion.path 
                            stroke={stroke2}
                            strokeWidth="2"
                            strokeLinejoin="round"
                            d="M 35 50 L 45 62 L 65 40 "
                            fill="none"
                            style={{pathLength:tickPath}}
                        />
                        <motion.path //左斜め
                            stroke={stroke1}
                            strokeWidth="2"
                            d="M 38 40 L 61 63 "
                            fill="none"
                            style={{pathLength:crossPathA}}
                        />
                        <motion.path //右斜め
                            stroke={stroke1}
                            strokeWidth="2"
                            d="M 61 40 L 38 63 "
                            fill="none"
                            style={{pathLength:crossPathB}}
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </>
    )
}