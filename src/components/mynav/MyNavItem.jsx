import {motion} from "framer-motion";
import mynav from "../../css/mynav.module.css";

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: 20 }
      }
    },
    closed: {
      x: 30,
      opacity: 0,
      transition: {
        x: { stiffness: 1000 }
      }
    }
};

export default function MyNavItem({i}) {
    const style = { border: `2px solid ${colors[i]}` };

    return (
        <motion.li
            variants={variants}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
        >
            <div className={mynav.icon} style={style}/>
            <div className={mynav.text} style={style}/>
        </motion.li>
    )
}