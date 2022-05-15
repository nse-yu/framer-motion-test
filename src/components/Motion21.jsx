import {AnimatePresence, motion, usePresence} from "framer-motion"
import classes from "../css/style.module.css";

export default function Motion21() {
    return (
        <motion.ul
            className={classes.div_module2}
            animate={{
              scale:[1,2,3,2,3,2,1],
              borderRadius:["50%","10%","30%","50%","10%","20%","50%"]
            }}
            transition={{
              duration:4
            }}
        >
        </motion.ul>
    )
}