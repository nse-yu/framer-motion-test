import {motion, useAnimation} from "framer-motion"

export default function Motion8(props) {
    const controls = useAnimation()
    
    /**controls.start
     * １．TargetAndTransitionの他、variantsのプロパティを指定することもできる
     * ２．Promiseを返すため、thenなどが使える
     */
    controls.start({
        x: "100%",
        backgroundColor: "black",
        transition: {duration: 3}
    }).then(() => {console.log("hoge")})
    
    controls.stop({
        x: "20%"
    })

    return (
        <motion.div style={props.design} animate={controls}/>
    )

}