import {useCycle} from "framer-motion";
import {motion} from "framer-motion";

const Star = ({clicked = () => {console.log("none function")},key}) => {
    const [isStarred,cycleStarred] = useCycle(false,true)

    return (
        <motion.svg 
            key={key}
            width="40" height="40" viewBox="0 0 40 40" 
            stroke="yellow" 
            initial={{scale:1,opacity:0.6}}
            animate={{fill:isStarred ? "yellow" : "none",scale:isStarred ? 2 : 1,rotate:isStarred ? 90 : -90}}
            transition={{duration:0.8,type:"spring",damping:4}}
            onClick={() => {
                let star = isStarred 
                cycleStarred()
                clicked(!star) //この時点でなぜかisStarredが更新されてないから、コピーを反転して渡す
            }}
        >
            <polygon
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">   
            </polygon>
        </motion.svg>
    )
}

export default Star;