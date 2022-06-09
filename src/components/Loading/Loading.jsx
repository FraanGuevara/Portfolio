import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';


export default function Loading() {

    return (
        <>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', backgroundColor:'#303030'}}>
            <CircularProgress />
            </div>

        </>
    )
}
