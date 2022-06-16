import React from 'react'
import styles from './Contact.module.css';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

export default function CardContacto({Icono, link, t, animacion}) {


  return (
    <>
    <motion.div
    animate={animacion}
    >
    <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all" glareBorderRadius='20px'>
        <div className={styles.card}>
            <div className={styles.card__icono}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                <Icono id={styles.card__icono_png} />
                </a>
            </div>
            <div className={styles.card__texto}>
            <p className={styles.card__texto_txt}>
                {t}
            </p>
            </div>
        </div>
    </Tilt>
    </motion.div>
    </>
  )
}
