import {motion} from 'framer-motion';

export default function Motion4(props) {
    //===============variants==============//
    //variantsは、事前に定義されたプロパティ群であり、motionDOMでプロパティ名を文字列で指定することで読み込む
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <motion.div
            style={props.design}
            initial="hidden"
            animate="visible"
            transition={{duration:3}}
            variants={variants}
        />
    )
}