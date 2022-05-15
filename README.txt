//=================Variants==================//
variantsは基本的に、animationさせるものについて事前定義するものだが、
オプションでtransition（どのようにanimationさせるのか）を指定できる。
これは、子要素のtransitionをコントロールするために用いられる。
親要素でanimationするvariantsのプロパティは、子要素のanimationするプロパティへと波及するため、
例えば、親要素で「X」という名前のvariantsプロパティをanimationする場合、子要素でも同じvariantsプロパティを
定義しておくと、子要素でも「X」がanimationされることになる。
名前は「X」のままで、内容だけオーバーライドすることもできる。

variantsには二つの役割がある。
一つ目：使用するプロパティを子要素に通知する（animateプロパティで宣言すれば通知が行く）
二つ目：親要素（自分）に対して初期状態として使用するプロパティを与える（variantsプロパティで宣言する）


delayChildren：
   子要素がanimationするまでの待ち時間
staggerChildren：
   指定時間の周辺値だけ待つ（0.01sなら、１つ目の要素が0、２つ目が0.01、３つ目が0.02）
   つまり、子要素の遷移のずれを表現するための値である。
staggerDirection：
   遷移ずれの順（昇順：1,降順：-1）
when：
   子要素がどのタイミング（親より後か先）で遷移するか。
   beforeChildren：親が先
   afterChildren：子が先
repeat：
   何回animationを繰り返すか（数値指定）。Infinityで無限繰り返し
   repeatTypeが未設定なら、loop設定
repeatType：
   loop：１通りの動作の繰り返し
   reverse：１通りの動作後に巻き戻し
   mirror：逆（始点が終点、終点が始点になる）
repeatDelay：
   各繰り返しにおける待ち時間
ease：
   加減速の程度を示す
   固定値：linear,easeIn,easeOut,easeInOut,circIn,circOut,circInOut,backIn,backOut,backInOut,anticipate
from：
   animationの初期値
times：
   キーフレームのような複数の値の配列をanimationする際、各値が到達する時間の間隔

bounceStiffness：
   min,maxの指定時のみ、stiffnessと同じ効果（def. 500）
bounceDumping：
   min,maxの指定時のみ、dampingと同じ効果（def. 10）
power：
   値が高いほど、ターゲットとの距離が遠い（def. 0.8）
timeConstant：
   減速の持続時間（def. 700）
min：
   境界設定。これよりも小さいと戻される
max：
   境界設定。これよりも大きいと戻される

★min,maxは、springのようなanimationをdragで表現することを可能にする。
　これは、画面上に疑似的な物理空間を構築し、物質が移動可能な境界を定めている。
　ここで、物質は初期位置からバネでつながれていると仮定され、max[px]を可動域（弾性力の働かない）とすると、
　maxが定めているのは、バネの自然長であるとわかる。
　そして、自然長よりも物質が遠くに移動することで、距離に比例した弾性力が、物質を初期位置に戻そうとする。
　また、当然であるが、物理空間を創造しているため、地面に沿って横移動は可能だが、垂直移動は重力によって無条件に戻されることになる。

//=============ジェスチャーイベント============//

様々なジェスチャーに関するイベントが存在
１．whileHover
２．whileTap
３．whileFocus
４．whileDrag
５．whileInView：viewport内に要素があることを検知
これらにより、motionコンポーネントの状況によってanimationを制御可能

//=========コールバック==========//
１．onHoverStart(event,info)
    hoverが開始したら呼び出し
　
２．onHoverEnd(event,info)
    hoverが停止したら呼び出し

３．onTap(event,info)
    タップイベントが正常終了しタラ呼び出し

４．onTapStart(event,info)
    タップイベントが開始したら呼び出し

５．onTapCancel(event,info)
    タップイベントが終了したら呼び出し

７．onViewportEnter(entry)
    要素がviewportに入ったときに呼び出し

８．onViewportLeave(entry)
    要素がviewportから出たときに呼び出し

１０．onPan(event,info)
    ポインタが要素を押して、3ピクセル以上移動すると呼び出される

※panジェスチャーには、cssでtouch-actionで何かを無効化しないといけない

１１．onPanStart(event,info)
    パンジェスチャーの開始時

１２．onPanEnd(event,info)
    パンジェスチャーの終了時（ポインタが離れた時）


//===========プロパティ============//
１．viewport
    どのようにviewportが検知されるか
 once：一度viewportに入ったら、以後はwhileInViewが呼び出されない

２．margin
    要素がviewportに入ったか判定する際に追加されるマージン

３．drag
 x：水平方向へのドラッグ
 y：垂直方向へのドラッグ

４．dragConstraints
    ドラッグ可能な距離をオブジェクトで指定する（right,left,top,bottom）

５．dragSnapToOrigin
    可能距離を超えた場合に、中心もしくは元の位置にanimationで戻る（def. false）

６．dragElastic
    制約の外側でどれだけ動けるか（def. 0.5）
    ０なら動かず、１なら完全に動く

７．dragMomentum
    ドラッグ終了時に慣性の勢いをつけるかどうか（def. true）

８．dragTransition
    inertiaパラメータの変更が可能。
    ★ドラッグから解放されると慣性モーションに移行する。
 bounceStiffness：min,maxが定義済みならば、stiffnessと同じ効果
 bounceDamping  ：min,maxが定義済みならば、dampingと同じ効果

９．dragPropagation
    親要素に対してtrueで設定することで、子要素のドラッグが親要素のドラッグと連携する。
    
    
１０．dragControls
    ある要素をドラッグさせたい場合、それを別の要素から行うことができる。
    （別の要素のドラッグが目的の要素のドラッグに連携する）
    見て覚えるほうが速い

１１．dragListener
    dragControlsの方法では、別の要素からドラッグをさせることができるが、目的の要素からでも当然ドラッグ可能である。
    これを別の要素のみからドラッグ可能にするためには、dragListenerをfalseにする。

１２．layout
    レイアウトが変更されたときに、animationするかどうか
    例えば、スケールの変更などが当てはまる。
    しかし、親要素のスケール変更は、子要素の視覚的歪みを発生させる要因となるため、
    子要素にもlayoutを付与するといい
 position：位置変更のみがanimationされる
 size    ：サイズ変更のみが〃

//=============MotionValue============//
・状態を設定できる（useStateのように）
・複数のコンポーネントに渡すことで、motionを同期することができる
・useTransformを使ってMotionValueを連鎖
・render()を起動することなく、プロパティを変更できる

const x = useMotionValue(0) //x軸方向へのanimation：初期値0
x.get() //xの値を取得
x.set() //xの値を設定
x.isAnimating() //xが現在animationされているか
x.stop() //現在のanimationを停止


//xが0～300 : opacityが1～0でグラデーションする
//xが300～500 : opacityが0～0.6でグラデーションする
const input = [0,300,500] 
const output = [1,0,0.6] //inputに対して、outputは数値、色、影などが指定可能

//initial={{opacity: x(=0)}}
//animate={{opacity: output(x)}}
const opacity = useTransform(x,input,output) 

//opacityに引数としてxを与えるイメージ
style={{x,opacity}} 

※styleに指定するプロパティはそれぞれ、実在するプロパティ名でないといけない

★MotionValueは、任意で作成した値をstyleプロパティに渡すことにより効果を発揮する。
　styleプロパティに渡されると、animateプロパティで同名のプロパティがanimateされている場合、
　motionvalueと同期する。
　また、dragモーションをonにしている場合、xやyなどのMotionValueは座標の移動を同期できる。
　とにかく、styleに渡すことで真の力を発揮するということだ。

★上記の通り、MotionValueとstyleプロパティを組み合わせることにより、動的な処理が可能になるが、
　これにuseTransform()を使用すると、動的なアニメーションが可能になる。
　MotionValueがanimateされているプロパティと同期をとると、その都度MotionValueはuseTransformに
　引数のように渡され、useTransformはその入力から、具体的な「数値」や「色」などを返すことができる。
　
この通り、styleは初期値として使用できるほか、MotionValueによる動的なanimationの実現を可能にする。

//===============AnimatePresense===============//
AnimatePresenseタグの直系の子要素が削除されるタイミングで、
子要素にはキーが必要である。
そして、子要素の削除（キーの消失）にexitプロパティが反応することで、
削除時のアニメーションが適用される。
子要素にマウント時のアニメーションをさせない方法として、AnimatePresenseの
initialプロパティをfalseにする