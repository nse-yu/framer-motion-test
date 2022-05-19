import {motion} from 'framer-motion';

export default function Motion7(props) {
    let array = [1,2,3,4];

    //==============dynamic variants==============//
    const functionalVariants = {
        init: {
        x: 0
        },
        after: i => ({
        x: i > 0 ? 100 * i : 100,
        transition: {
            delay: i*0.3
        }
        })
    }

    return (
        array.map((item,index) => {
            return <motion.div
                key={index}
                style={props.child}
                variants={functionalVariants}
                custom={item}
                animate="after"
                initial="init"
                />
        })
    )
}