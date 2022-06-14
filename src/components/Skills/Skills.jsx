import React, { useState } from 'react'
import styles from './Skills.module.css';
import Canvas from './Canvas.jsx';
import TextSkills from './TextSkills';



export default function Skills({ t }) {

  const [titleSkills, setTitleSkills] = useState('');

  // const handleClick = (e) => {
  //     const { title } = e.target;
  //     setTitleSkills(title);
  //     return console.log(title);
  //     /* return console.log(e.target.title); */
  // }

  return (
    <>
      <div className={styles.containerSkills}>
        <h2 id={styles.titleSkills}><hr id={styles.hrTitleSkills} />{t("skills.skills")} <hr id={styles.hrTitleSkills} /></h2>
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
