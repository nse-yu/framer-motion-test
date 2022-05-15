import {motion, useCycle} from "framer-motion";
import mynav from "../../css/mynav.module.css";
import MyNavContents from "./MyNavContents";
import MyNavToggleButton from "./MyNavToggleButton";

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`, //表示部分の切り取り
      transition: {
        type: "spring",
        stiffness: 10,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)", //表示部分の切り取り circle(半径 at x y)
      transition: {
        delay: 0.4,
        type: "spring",
        stiffness: 90,
        damping: 15
      }
    }
};

export default function MyNavRoot() {
    const [isOpen,cycleOpen] = useCycle(false,true);
    return (
        <motion.nav
            className={mynav.container}
            initial={false}
            variants={sidebar}
            animate={isOpen ? "open" : "closed"}
        >
            <MyNavToggleButton toggle={() => cycleOpen()}/>
            <MyNavContents />
        </motion.nav>
    )
}