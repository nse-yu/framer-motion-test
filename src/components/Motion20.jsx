import {AnimatePresence, motion, usePresence} from "framer-motion"
import classes from "../css/style.module.css";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

export default function Motion20() {
    return (
        <motion.ul
            className={classes.container}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {[0, 1, 2, 3].map((index) => (
            <motion.li key={index} className={classes.item} variants={item} />
            ))}
        </motion.ul>
    )
}