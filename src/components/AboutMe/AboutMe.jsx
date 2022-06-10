import { Container } from '@mui/system';
import React from 'react';
import styles from './AboutMe.module.css'

export default function AboutMe() {
    return (
        <>
            <div className={styles.aboutMeContainer}>
                <Container>
                    <div id={styles.AboutMeText}>
                        <h1 className={styles.AboutMeText__h1}>About Me</h1>
                        <p className={styles.AboutMeText__p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur fugit vero eaque velit aspernatur possimus dolores officiis voluptatem, recusandae odit necessitatibus? Quidem velit modi dolore doloremque voluptate distinctio repudiandae incidunt!</p>
                    </div>
                </Container>
            </div>
        </>
    )
}
