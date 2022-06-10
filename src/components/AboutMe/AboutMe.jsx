import { Container } from '@mui/system';
import React from 'react';
import SvgAbout from '../Svg/SvgAbout';
import styles from './AboutMe.module.css'

export default function AboutMe() {
    return (
        <>
            <div className={styles.aboutMeContainer}>
                {/* <Container> */}
                    <div id={styles.AboutMeText} className={styles.tronFilter}>
                        <div style={{backgroundColor:'rgba(0, 0, 0, 0.18)', padding:'25%', borderRadius:'50%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                            <h1 className={styles.AboutMeText__h1}>About Me</h1>
                            <p className={styles.AboutMeText__p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur fugit vero eaque velit aspernatur possimus dolores officiis voluptatem, recusandae odit necessitatibus? Quidem velit modi dolore doloremque voluptate distinctio repudiandae incidunt!</p>
                        </div>
                    </div>
                <SvgAbout />
                {/* </Container> */}
            </div>
        </>
    )
}
