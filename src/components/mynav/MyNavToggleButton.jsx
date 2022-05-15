import {motion} from "framer-motion";
import mynav from "../../css/mynav.module.css";

const Path = props => (
    <motion.path
      fill="transparent"            //三角形以上の場合の色埋め
      strokeWidth="4"               //線の縦幅
      stroke="rgba(0, 0, 0, 1)"     //線の色
      strokeLinecap="round"         //線の形状
      {...props}                    //その他のプロパティを展開
    />
  );

export default function MyNavToggleButton({toggle}) {
    return (
        <button onClick={toggle} className={mynav.navBtn}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </button>
    )
}