import React, { useState } from 'react'
import styles from './Skills.module.css';
import Canvas from './Canvas.jsx';



export default function Skills() {

  const [titleSkills, setTitleSkills] = useState('');

  // const handleClick = (e) => {
  //     const { title } = e.target;
  //     setTitleSkills(title);
  //     return console.log(title);
  //     /* return console.log(e.target.title); */
  // }

  return (
    <>
      <div className={styles.skills}>
        <div className={styles.iconCloud}>
          <Canvas
            setTitleSkills={setTitleSkills}
          />
          <h1 className={styles.iconCloudTitle}>{titleSkills}</h1>
        </div>
      </div>
    </>
  )
}
