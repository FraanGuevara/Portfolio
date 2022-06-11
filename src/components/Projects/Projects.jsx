import React from 'react'
import styles from './Projects.module.css';
import computadora from '../../img/computadoraProyecto.webp';
/* import celular from '../../img/celularProyecto.webp'; */
import celular from '../../img/celular2.png';
import { Container } from '@mui/system';
import Carrousel from './Carrousel';

export default function Projects() {




    return (
        <>
        <div id={styles.mobileProjects}>
            <div id={styles.textProjects}>
                <h2 >PROJECTOS</h2>
            </div>
            <div className={styles.containerProjects}>
                <div className={styles.desktop}>
                    <img className={styles.desktopImg} src={computadora} alt="" />
                    <iframe className={styles.desktopIframe} src="https://fraanguevara.github.io/ProyectoPasteleria/" loading="lazy" tabindex="-1"></iframe>
                </div>
                <div className={styles.celular}>
                    <img className={styles.celularImg} src={celular} alt="" />
                    <iframe className={styles.celularIframe} src="https://auraflow.netlify.app" loading="lazy" tabindex="-1"></iframe>
                </div>
            </div>
            <Carrousel />
        </div>
            
        </>
    )
}
{/* <img className={styles.celularImg}  src={celular} alt="" /> */ }