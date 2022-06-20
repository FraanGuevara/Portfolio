import React, { useState, useEffect } from 'react'
import styles from './Skills.module.css';
import Canvas from './Canvas.jsx';
import TextSkills from './TextSkills';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


export default function Skills({ t }) {

  const [titleSkills, setTitleSkills] = useState('');

  const { ref, inView } = useInView({
    threshold: 0.1,
});
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
      id='hrefSkills'
      className={styles.containerSkills}>
        <h2 ref={ref} id={styles.titleSkills}>
          <motion.hr animate={animationHr} id={styles.hrTitleSkills} />
          {t("skills.skills")} 
          <motion.hr animate={animationHr2} id={styles.hrTitleSkills} /></h2>
        <div className={styles.skills}>
          <div className={styles.iconCloud}>
            <Canvas
              setTitleSkills={setTitleSkills}
            />
            <h1 className={styles.iconCloudTitle}>{titleSkills}</h1>
          </div>
          <div className={styles.skillsText}>
            <TextSkills
            t={t}
            />
          </div>
        </div>
      </div>
    </>
  )
}
