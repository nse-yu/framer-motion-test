export default function Motion22() {
    return (
        <>
            <div style={{position: "absolute"}}>
            <svg width="500" height="1000">
                <path d='M 100 100 L 200 200 V 100 Q 400 0 300 30 Z' stroke='#FFFFFF' fill='#FFFFFF'/>
            </svg>
            </div>
            
            <div style={{position: "absolute"}}>
            <svg width="500" height="1000">
                <path d='M 100 200 H 300 Z' stroke='#FF0000' fill='#FF0000' />
            </svg>
            </div>
            
            <div style={{position: "absolute"}}>
            <svg width="500" height="1000">
                <path d='M 100 400 H 300 Z' stroke='#00FF00' strokeWidth="10px" fill='#FF0000'/>
            </svg>
            </div>
            
            <div style={{position: "absolute"}}>
            <svg width="500" height="1000">
                <path d='M 100 400 A 30 30 0 0 0 300 400 Z' stroke='#FF0000' fill='#FF0000' />
            </svg>
            </div>
            
            <div style={{position: "absolute",backgroundColor:"rgba(0, 0, 0, 0.192)",width:"100px",height:"100px"}}>
            <svg width="200" height="200" viewBox='30 0 200 200'>
                <path d='M 20 20 L 90 90 Z' stroke='#0000FF' fill='#FF0000' strokeWidth="4px"/>
            </svg>
            </div>
        </>
    )
}