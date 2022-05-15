import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react";
import classes from "../css/style.module.css";

export default function Motion19() {
    const [comments,setComments] = useState([["I have a pen.",true],["I have an apple.",true],["Oh, Apple-Pen!!",true]]);
    function del(evt) {
        let target = evt.target.nextSibling.innerHTML;
        const newcomments = [];
        comments.forEach(comment => 
            comment[0] === target ? newcomments.push(switchState(comment)) : newcomments.push(comment)
        );
        setComments(() => newcomments);
    }
    function switchState(comment){
        comment[1] = !comment[1]
        return comment;
    }

    return (
        <>
        {console.log("render")}
            <motion.ul
                className={classes.removalList}
            >
                <AnimatePresence
                    //exitBeforeEnter
                    initial={false}
                >
                    {comments.map((item,index) => 
                        item[1] && (
                            <motion.div
                                className={classes.removalList__item}
                                key={index}
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:2}}
                                exit={{x:500}}
                            >
                                <button onClick={del}></button>
                                <li>{item}</li>
                            </motion.div>
                        )
                    )}
                </AnimatePresence>
            </motion.ul>
        </>
    )
    
}