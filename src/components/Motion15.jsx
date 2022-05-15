import {motion, useMotionValue, useTransform} from "framer-motion"
import classes from "../css/style.module.css";

export default function Motion15(props) {
    const x = useMotionValue(0);
    const x_range = [0,300,600];
    //opacity
    const opac_range = [1,0,1];
    const opacity = useTransform(x,x_range,opac_range);
    //color
    const color_range = ["#0000ff","#008000","#ff0000"];
    const backgroundColor = useTransform(x,x_range,color_range);

    return (
        <>
            <motion.div 
                className={classes.div_module}
                animate={{x:600}}
                style={{x,opacity,backgroundColor}}
                transition={{duration:7}}
            />
        </>
    )
    
}