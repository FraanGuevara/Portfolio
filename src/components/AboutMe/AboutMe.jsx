import React from 'react';
import SvgAbout from '../Svg/SvgAbout';
import styles from './AboutMe.module.css'
import TouchAppIcon from '@mui/icons-material/TouchApp';


export default function AboutMe({ t }) {
    return (
        <>
            <div className={styles.aboutMeContainer}>
                <div id={styles.AboutMeText} className={styles.tronFilter}>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)', padding: '25%', borderRadius: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 className={styles.AboutMeText__h1}>{t("aboutMe.about")}</h1>
                        <p className={styles.AboutMeText__p}>{t("aboutMe.text")}
                        </p>
                    </div>
                </div>
                <SvgAbout />
                <TouchAppIcon id={styles.touchIcon} />
            </div>
        </>
    )
}
