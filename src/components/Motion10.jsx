import { useState } from "react";
import {motion} from "framer-motion"


export default function Motion10() {
    const handle = {
        width: "80px",
        height: "80px",
        backgroundColor: "rgb(154 152 152)",
        borderRadius: "40px"
    }
    const switcher = {
        width: "140px",
        height: "80px",
        backgroundColor: "rgba(240, 238, 235, 0.753)",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: "50px",
        padding: "10px",
        cursor: "pointer"
    }
    const off = {
        justifyContent: "flex-start"
    }
    const on = {
        justifyContent: "flex-end"
    }
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 20
    }

    const [isOn,setIsOn] = useState(false);
    
    const toggleSwitch = () => setIsOn(!isOn);

    /**親要素によるレイアウト変更時（形が変わる動作）にもアニメーションを行う：layoutをtrueにする */
    //また、親のレイアウト変更による子要素の歪みを補正する役割もある。
    return (
        <div className="switch" style={isOn ? Object.assign(switcher,on) : Object.assign(switcher,off)} onClick={toggleSwitch}>
            <motion.div className="handle" style={handle} layout transition={spring} />
        </div>
    )
}