import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function ButtonHome() {
    return (
        <>
            <Link style={{textDecoration:'none'}} to='/portfolio'>
                <Button variant='outlined' id={styles.botonHome} >Portfolio Franco Guevara</Button>
            </Link>
        </>
    )
}
