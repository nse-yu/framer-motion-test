import {motion} from 'framer-motion';

export default function Motion2(props) {
    return (
        <motion.div
            style={props.design}
            animate={{ x: [100, 1000, 120] }} //x: [始点,折返し点,終点] //点=現在地なら、nullを指定
            transition={{duration: 3,times:[0,0.2,1]}} //xに対応する経過時間
        />
    )
}