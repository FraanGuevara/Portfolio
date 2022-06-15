import React, { useState } from 'react'
import styles from './Projects.module.css';
import computadora from '../../img/computadoraProyecto.webp';
/* import celular from '../../img/celularProyecto.webp'; */
import celular from '../../img/celular2.png';
import Carrousel from './Carrousel';
import DevicesIcon from '@mui/icons-material/Devices';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function Projects({ t }) {

    const [linkIframe, setLinkIframe] = useState('https://auraflow.netlify.app');

    return (
        <>
            <div id={styles.mobileProjects}>
                <div id={styles.textProjects}>
                    <h2 id={styles.titleProjects}><hr id={styles.hrTitleProjects} />{t("projects.projects")}<DevicesIcon id={styles.iconTitleProjects}/> <hr id={styles.hrTitleProjects} /></h2>
                </div>
                <div className={styles.containerProjects}>
                    <div className={styles.desktop}>
                        <img className={styles.desktopImg} src={computadora} alt="" />
                        <iframe className={styles.desktopIframe} src={linkIframe} loading="lazy" tabIndex="-1"></iframe>
                    </div>
                    <div className={styles.celular}>
                        <img className={styles.celularImg} src={celular} alt="" />
                        <iframe className={styles.celularIframe} src={linkIframe} loading="lazy" tabIndex="-1"></iframe>
                    </div>
                </div>
                <div>
                    <div id={styles.touchIconDiv}>
                <DoubleArrowIcon id={styles.scrollIcon}/>
                    </div>
                <Carrousel 
                setLinkIframe={setLinkIframe}
                t={t}
                />

                </div>
            </div>

        </>
    )
}
