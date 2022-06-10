import React, { useState, useEffect } from 'react'
import styles from './Home.module.css'
import TypeWriterEffect from 'react-typewriter-effect';
import Loading from '../Loading/Loading';






export default function Home({ t }) {
    const [text, setText] = useState([]);
    const [loading, setLoading] = useState(false);
    
    
    useEffect(() => {
        setText([t("home.typeWriteEffect"),
        t("home.typeWriteEffect2"),
        t("home.typeWriteEffect3")])
    }, [t("home.typeWriteEffect")])

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);}, 1500);
    }, [text])

    return (
        <>

        {loading ? <Loading/>:
            <div className={styles.homeContainer}>
                <h3>{t("home.hello")}</h3>
                <h1>Franco Guevara</h1>
                <h4>{t("home.iam")}</h4>
                <div className={styles.typeEffect}>
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: 'Roboto Mono',
                            color: '#ebff05',
                            fontWeight: 500,
                            fontSize: '1.5em',
                            textAlign: 'center',
                        }}
                        multiTextLoop={true}
                        startDelay={1000}
                        cursorColor="#3F3D56"
                        multiText={text}
                        multiTextDelay={1000}
                        typeSpeed={60}
                    />
                </div>
            </div>
        }
        </>
    )
}
