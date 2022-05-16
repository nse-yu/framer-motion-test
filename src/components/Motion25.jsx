import style from "../css/style.module.css";

export default function Motion25() {

    return (
        <>
        <h2>to top, to bottom, to left, to right の値は、 0deg, 180deg, 270deg, 90deg の角度にそれぞれ対応します。他の値は角度に変換されます。</h2>
            <div style={{display:"flex",alignItems:"center"}}>
                <div className={style.gradient1}></div>
                <span style={{marginLeft:"2rem"}}>linear-gradient(#ff0000, #0000ff, #ffff00)</span>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <div className={style.gradient2}></div>
                <span style={{marginLeft:"2rem"}}>linear-gradient(0.25turn, #ff0000, #0000ff, #ffff00)</span>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <div className={style.gradient3}></div>
                <span style={{marginLeft:"2rem"}}>linear-gradient(45deg, #ff0000, #0000ff, #ffff00)</span>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <div className={style.gradient4}></div>
                <span style={{marginLeft:"2rem"}}>linear-gradient(to left top, #ff0000, #0000ff, #ffff00)</span>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <div className={style.gradient5}></div>
                <span style={{marginLeft:"2rem"}}>linear-gradient(45deg, #ff0000, 50%, #0000ff, #ffff00)</span>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <div className={style.gradient6}></div>
                <span style={{marginLeft:"2rem"}}>linear-gradient(45deg, red 0 50%, blue 50% 100%)</span>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <div className={style.gradient7}></div>
                <span style={{marginLeft:"2rem"}}>linear-gradient(red 10%, 30%, blue 90%)</span>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <div className={style.gradient8}></div>
                <span style={{marginLeft:"2rem"}}>linear-gradient(to right,red 20%, orange 20% 40%, yellow 40% 60%, green 60% 80%, blue 80%)</span>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <div className={style.gradient9}></div>
                <span style={{marginLeft:"2rem"}}>linear-gradient(135deg, orange 60%, cyan)</span>
            </div>
        </>
    )
}