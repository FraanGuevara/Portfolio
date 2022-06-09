import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Inicio.module.css'

export default function ButtonInicio() {
    return (
        <>
            <Link style={{textDecoration:'none'}} to='/portfolio'>
                <Button variant='outlined' id={styles.botonInicio} >Portfolio Franco Guevara</Button>
            </Link>
        </>
    )
}
