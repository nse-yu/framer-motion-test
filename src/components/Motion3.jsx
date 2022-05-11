import {motion} from 'framer-motion';

export default function Motion3(props) {
    <motion.div
        style={props.design}
        animate={{ x: 100, opacity: 0.6 }}
        initial={false} 
    />
}