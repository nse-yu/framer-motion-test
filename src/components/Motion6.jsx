import {motion} from 'framer-motion';

export default function Motion6(props) {
    const orc = {
        left: {
          y: 0,
          opacity: 1,
          transition: {
            when: "afterChildren"
          }
        },
        right: {
          x: 200,
          opacity: 0.3,
          transition: {
            when: "beforeChildren",
            staggerChildren: 2, //子要素それぞれの動作間隔
            duration: 5
          }
        },
    }

    return (
        <motion.div
            style={props.parent}
            variants={orc}
            initial="left"
            animate="right"
        >
            <motion.div style={props.child} variants={orc}/>
            <motion.div style={props.child} variants={orc}/>
            <motion.div style={props.child} variants={orc}/>
            <motion.div style={props.child} variants={orc}/>
            <motion.div style={props.child} variants={orc}/>
        </motion.div>
    )
}