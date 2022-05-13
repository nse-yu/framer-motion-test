import {motion} from "framer-motion"

export default function Motion12(props) {
    return (
        <>
            <motion.div
                style={props.design}
                animate={{x:200}}
                transition={{
                    duration:3,
                    bounce:1,
                    type:"spring",
                    repeat:"Infinity",
                    repeatType:"mirror"
                }}
            >
                spring（バネ）
            </motion.div>
            
            <motion.div
                style={props.design}
                animate={{x:200}}
                transition={{
                    duration:3,
                    damping:2,
                    type:"tween",
                    repeat:"Infinity",
                    repeatType:"mirror",
                    ease: "easeInOut"
                }}
            >
                tween
            </motion.div>

            <motion.div
                style={props.design}
                animate={{x:200}}
                transition={{duration:3,damping:2,type:"inertia"}} //慣性を用いたスクロールなどに用いられる
            >
                inertia（慣性）
            </motion.div>

            <motion.div
                style={props.design}
                drag
                dragTransition={{
                    min: 0,
                    max: 100,
                    bounceStiffness: 100
                }}
            />
        </>
    )
}