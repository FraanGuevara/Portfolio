import React, { useState, useEffect } from 'react'
import styles from './Home.module.css'
import TypeWriterEffect from 'react-typewriter-effect';
import Loading from '../Loading/Loading';
import { motion } from 'framer-motion';


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
            setLoading(false);
        }, 1500);
    }, [text])


    return (
        <>
            {loading ? <Loading /> :
                <motion.div
                    id='hrefHome'
                    className={styles.homeContainer}>
                    <motion.h3
                    animate={{ y: [500, 0] }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    >{t("home.hello")}</motion.h3>
                    <motion.h1
                    animate={{ x: [-500, 0] }}
                    transition={{ ease: "easeOut", duration: 3}}
                    >Franco Guevara</motion.h1>
                    <motion.h4
                    animate={{ x: [500, 0] }}
                    transition={{ ease: "easeOut", duration: 4}}
                    >{t("home.iam")}</motion.h4>
                    <motion.div 
                    animate={{ y: [500, 0] }}
                    transition={{ ease: "easeOut", duration: 3 }}
                    className={styles.typeEffect}>
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Roboto Mono',
                                color: '#ebff05',
                                fontWeight: 500,
                                fontSize: '1.5em',
                                textAlign: 'center',
                            }}
                            multiTextLoop={true}
                            startDelay={3000}
                            cursorColor="#3F3D56"
                            multiText={text}
                            multiTextDelay={1000}
                            typeSpeed={60}
                        />
                    </motion.div>
                </motion.div>
            }
        </>
    )
}
