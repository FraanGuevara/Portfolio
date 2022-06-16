import React, { useEffect } from 'react';
import SvgAbout from '../Svg/SvgAbout';
import styles from './AboutMe.module.css'
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export default function AboutMe({ t }) {


    const { ref, inView } = useInView({
        threshold: 0.7,
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                scale: 1,
                transition: { ease: "easeOut", duration: 3 }
            })
        }
        if (!inView) {
            animation.start({
                scale: 0,
                transition: { ease: "easeOut", duration: 3 }
            })
        }
    }, [inView]);


    return (
        <>
            <div
                className={styles.aboutMeContainer}>
                <motion.div
                    animate={animation}
                    id={styles.AboutMeText} className={styles.tronFilter}>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)', padding: '25%', borderRadius: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 ref={ref} className={styles.AboutMeText__h1}>
                            {t("aboutMe.about")}
                        </h1>
                        <p className={styles.AboutMeText__p}>
                            {t("aboutMe.text")}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    animate={animation}
                >
                    <SvgAbout />
                </motion.div>
                <TouchAppIcon id={styles.touchIcon} />
            </div>
        </>
    )
}
