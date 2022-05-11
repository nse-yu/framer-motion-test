import {motion} from 'framer-motion';

export default function Motion5(props) {
    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }

    return (
        <motion.ul
            initial="hidden"          //階層をなす場合、子要素にもvariantsが伝播する
            animate="visible"         //子要素で同じプロパティを設定すれば、伝播しない？
            variants={list}
            transition={{duration:5}}
        >
            <motion.li variants={item} >item1</motion.li>
            <motion.li variants={item} >item2</motion.li>
            <motion.li variants={item} >item3</motion.li>
         </motion.ul>
    )
}