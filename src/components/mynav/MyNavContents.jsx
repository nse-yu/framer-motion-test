import {motion} from "framer-motion";
import MyNavItem from "./MyNavItem";

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.07, staggerDirection: -1 }
    }
};

export default function MyNavContents() {
    const items = [0,1,2,3,4];

    return (
        <motion.ul
            variants={variants}
        >
            {items.map(i => (
                <MyNavItem i={i} key={i} />
            ))}
        </motion.ul>
    )
}