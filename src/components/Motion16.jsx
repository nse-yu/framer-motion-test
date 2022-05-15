import {motion, useMotionValue, useSpring, useTransform} from "framer-motion"
import classes from "../css/style.module.css";

export default function Motion16() {
    const t = useSpring(1, { stiffness: 300 });
    const scale = useSpring(t, { damping: 10 });

    return (
        <>
            <motion.div 
                className={classes.div_module}
                style={{t,scale}}
                transition={{duration:5}}
                onClick={() => {t.set(t.get()+1)}}
            />
        </>
    )
    
}