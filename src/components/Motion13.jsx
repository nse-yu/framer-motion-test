import {motion} from "framer-motion"

export default function Motion13(props) {
    /**ジェスチャーイベント
     * 
     * 様々なジェスチャーに関するイベントが存在
     * １．whileHover
     * ２．whileTap
     * ３．whileFocus
     * ４．whileDrag
     * ５．whileInView：viewport内に要素があることを検知
     * これらにより、motionコンポーネントの状況によってanimationを制御可能
     * 
     * //=========コールバック==========//
     * １．onHoverStart(event,info)
     *  hoverが開始したら呼び出し
     * 
     * ２．onHoverEnd(event,info)
     *  hoverが停止したら呼び出し
     * 
     * ３．onTap(event,info)
     *  タップイベントが正常終了しタラ呼び出し
     * 
     * ４．onTapStart(event,info)
     *  タップイベントが開始したら呼び出し
     * 
     * ５．onTapCancel(event,info)
     *  タップイベントが終了したら呼び出し
     * 
     * ７．onViewportEnter(entry)
     *  要素がviewportに入ったときに呼び出し
     * 
     * ８．onViewportLeave(entry)
     *  要素がviewportから出たときに呼び出し
     * 
     * １０．onPan(event,info)
     *  ポインタが要素を押して、3ピクセル以上移動すると呼び出される
     * 
     * ※panジェスチャーには、cssでtouch-actionで何かを無効化しないといけない
     * 
     * １１．onPanStart(event,info)
     *  パンジェスチャーの開始時
     * 
     * １２．onPanEnd(event,info)
     *  パンジェスチャーの終了時（ポインタが離れた時）
     * 
     * １６．
     * 
     * //===========プロパティ============//
     * １．viewport
     *  どのようにviewportが検知されるか
     *  once：一度viewportに入ったら、以後はwhileInViewが呼び出されない
     * 
     * ２．margin
     *  要素がviewportに入ったか判定する際に追加されるマージン
     * 
     * ３．drag
     *  x：水平方向へのドラッグ
     *  y：垂直方向へのドラッグ
     * 
     * ４．dragConstraints
     *  ドラッグ可能な距離をオブジェクトで指定する（right,left,top,bottom）
     * 
     * ５．dragSnapToOrigin
     *  可能距離を超えた場合に、中心もしくは元の位置にanimationで戻る（def. false）
     * 
     * ６．dragElastic
     *  制約の外側でどれだけ動けるか（def. 0.5）
     *  ０なら動かず、１なら完全に動く
     */
    return (
        <>
            <motion.button
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
            >ボタン</motion.button>
            <motion.div 
                style={props.design}
                onPan={(evt,info) => console.log(info.point.x,info.point.y)}
            />
        </>
    )
    
}