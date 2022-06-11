import React from 'react'
import styles from './Projects.module.css';
import computadora from '../../img/computadoraProyecto.webp';
/* import celular from '../../img/celularProyecto.webp'; */
import celular from '../../img/celular2.png';
import { Container } from '@mui/system';

export default function Projects() {
    return (
        <>
            <div className={styles.containerProjects}>
                <div className={styles.desktop}>
                    <img className={styles.desktopImg} src={computadora} alt="" />
                    <iframe className={styles.desktopIframe} src="https://sapphirebar.netlify.app" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className={styles.celular}>
                    <img className={styles.celularImg} src={celular} alt="" />
                    <iframe className={styles.celularIframe} src="https://ar-pilates.netlify.app/index.html" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}
{/* <img className={styles.celularImg}  src={celular} alt="" /> */ }