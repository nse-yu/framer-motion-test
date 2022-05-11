import {motion} from 'framer-motion';
import { useState } from 'react';

export default function Motion1(props) {
    //==============states===============//
    const [isAnimate,setIsAnimate] = useState(false);

    return (
        <motion.div
            style={props.design}
            animate={{
            opacity: isAnimate ? 0.5 : 1,
            x: isAnimate ? "80vw" : 0,
            rotate: isAnimate ? 360 : 0
            }}
            initial={{
            opacity: 1
            }}
            transition={{
            type: "spring",
            duration: 2
            }}
            onClick={() => setIsAnimate(() => !isAnimate)}
      />
    )
}