import {motion} from 'framer-motion';

export default function Motion6(props) {
  /**variantsは基本的に、animationさせるものについて事前定義するものだが、
   * オプションでtransition（どのようにanimationさせるのか）を指定できる。
   * これは、子要素のtransitionをコントロールするために用いられる。
   * delayChildren：
   *    子要素がanimationするまでの待ち時間
   * staggerChildren：
   *    指定時間の周辺値だけ待つ（0.01sなら、１つ目の要素が0、２つ目が0.01、３つ目が0.02）
   *    つまり、子要素の遷移のずれを表現するための値である。
   * staggerDirection：
   *    遷移ずれの順（昇順：1,降順：-1）
   * when：
   *    子要素がどのタイミング（親より後か先）で遷移するか。
   *    beforeChildren：親が先
   *    afterChildren：子が先
   * repeat：
   *    何回animationを繰り返すか（数値指定）。Infinityで無限繰り返し
   *    repeatTypeが未設定なら、loop設定
   * repeatType：
   *    loop：１通りの動作の繰り返し
   *    reverse：１通りの動作後に巻き戻し
   *    mirror：逆（始点が終点、終点が始点になる）
   * repeatDelay：
   *    各繰り返しにおける待ち時間
   * ease：
   *    加減速の程度を示す
   *    固定値：linear,easeIn,easeOut,easeInOut,circIn,circOut,circInOut,backIn,backOut,backInOut,anticipate
   * from：
   *    animationの初期値
   * times：
   *    キーフレームのような複数の値の配列をanimationする際、各値が到達する時間の間隔
   * 
   * bounceStiffness：
   *    min,maxの指定時のみ、stiffnessと同じ効果（def. 500）
   * bounceDumping：
   *    min,maxの指定時のみ、dampingと同じ効果（def. 10）
   * power：
   *    値が高いほど、ターゲットとの距離が遠い（def. 0.8）
   * timeConstant：
   *    減速の持続時間（def. 700）
   * min：
   *    境界設定。これよりも小さいと戻される
   * max：
   *    境界設定。これよりも大きいと戻される
   * 
   * ★min,maxは、springのようなanimationをdragで表現することを可能にする。
   * 　これは、画面上に疑似的な物理空間を構築し、物質が移動可能な境界を定めている。
   * 　ここで、物質は初期位置からバネでつながれていると仮定され、max[px]を可動域（弾性力の働かない）とすると、
   * 　maxが定めているのは、バネの自然長であるとわかる。
   * 　そして、自然長よりも物質が遠くに移動することで、距離に比例した弾性力が、物質を初期位置に戻そうとする。
   * 　また、当然であるが、物理空間を創造しているため、地面に沿って横移動は可能だが、垂直移動は重力によって無条件に戻されることになる。
   */
    const orc = {
        left: {
          y: 0,
          opacity: 1,
          transition: {
            when: "afterChildren"
          }
        },
        right: {
          x: 200,
          opacity: 0.3,
          transition: {
            when: "beforeChildren",
            staggerChildren: 2, //子要素それぞれの動作間隔
            duration: 5
          }
        },
    }

    return (
        <motion.div
            style={props.parent}
            variants={orc}
            initial="left"
            animate="right"
        >
            <motion.div style={props.child} variants={orc}/>
            <motion.div style={props.child} variants={orc}/>
            <motion.div style={props.child} variants={orc}/>
            <motion.div style={props.child} variants={orc}/>
            <motion.div style={props.child} variants={orc}/>
        </motion.div>
    )
}