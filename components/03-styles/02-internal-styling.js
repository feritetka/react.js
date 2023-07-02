import React from 'react'

export default function InternalStyling() {

    const styleTitle = {
        fontSize: "2rem",
        color:"green",
        fontWeight:'bold',
        textAlign:'center'
    }

    const styleParagraph = {
        ...styleTitle,
        color: 'red',
        fontSize: '1rem'
    };

    return (
        <div>
            <h2 style={styleTitle}>
                React donguleri</h2>
            <p style={styleParagraph}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus aspernatur atque inventore molestiae animi dolorem ad possimus ducimus quos aliquam porro aut odit aliquid facilis neque placeat, exercitationem vitae enim!</p>
        </div>
    )
}
