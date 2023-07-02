import React from 'react'

function InlineStyling() {
    return (
        <div 
            style={{
                border:'1px solid red',
                padding: '1rem',
                borderRadius:'1rem',
                textAlign:"center"
            }}
        >
            <h2 style={{margin: 0, color: "navy"
        }}>React Fundamentals</h2>
            <p style={{fontStyle: "italic", color:"rgba(155,135,120,0.7)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio, voluptates sed dolorem itaque enim. Ipsa eligendi amet repellendus? Nobis, consequatur aliquid non architecto repellendus hic omnis sequi. Distinctio, eum!</p>
        </div>
    )
}

export default InlineStyling