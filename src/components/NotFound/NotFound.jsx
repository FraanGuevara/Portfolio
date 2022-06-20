import React from 'react'
import img from '../../img/giphy.webp'

export default function NotFound() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <img src={img} alt="Not found" style={{width:'350px'}} />
            </div>
        </>
    )
}
