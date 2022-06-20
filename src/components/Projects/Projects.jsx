import React, { useState, useEffect } from 'react'
import styles from './Projects.module.css';
import computadora from '../../img/computadoraProyecto.webp';
/* import celular from '../../img/celularProyecto.webp'; */
import celular from '../../img/celular2.png';
import Carrousel from './Carrousel';
import DevicesIcon from '@mui/icons-material/Devices';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export default function Projects({ t }) {

    const [linkIframe, setLinkIframe] = useState('https://auraflow.netlify.app');

    const { ref, inView } = useInView({
        threshold: 0.1,
    });
    const animation = useAnimation();
    const animationHr = useAnimation();
    const animationHr2 = useAnimation();

    useEffect(() => {
        if (inView) {
            animationHr.start({
                x: 0,
                scale: 1,
                transition: { ease: "easeOut", duration: 1.5 }
            })
            animationHr2.start({
                x: 0,
                scale: 1,
                transition: { ease: "easeOut", duration: 1.5 }
            })
        }
        if (!inView) {
            animationHr.start({
                x: -500,
                scale: 0,
                transition: { ease: "easeOut", duration: 0 }
            })
            animationHr2.start({
                x: 500,
                scale: 0,
                transition: { ease: "easeOut", duration: 0 }
            })
        }
    }, [inView]);

    return (
        <>
            <div 
            id='hrefProjects'
            className={styles.mobileProjects}>
                <div id={styles.textProjects}>
                    <h2
                    ref={ref}
                    id={styles.titleProjects}>
                        <motion.hr animate={animationHr} id={styles.hrTitleProjects} />
                        {t("projects.projects")}<DevicesIcon id={styles.iconTitleProjects} />
                        <motion.hr animate={animationHr2} id={styles.hrTitleProjects} /></h2>
                </div>
                <div className={styles.containerProjects}>
                    <div
                        className={styles.desktop}>
                        <img className={styles.desktopImg} src={computadora} alt="" />
                        <iframe className={styles.desktopIframe} src={linkIframe} loading="lazy" tabIndex="-1"></iframe>
                    </div>
                    <div
                    className={styles.celular}>
                        <img className={styles.celularImg} src={celular} alt="" />
                        <iframe className={styles.celularIframe} src={linkIframe} loading="lazy" tabIndex="-1"></iframe>
                    </div>
                </div>
                <div>
                    <div id={styles.touchIconDiv}>
                        <DoubleArrowIcon id={styles.scrollIcon} />
                    </div>
                    <Carrousel
                        ref={ref}
                        setLinkIframe={setLinkIframe}
                        t={t}
                    />

                </div>
            </div>

        </>
    )
}
