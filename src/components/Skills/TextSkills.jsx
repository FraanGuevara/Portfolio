import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import TypeWriterEffect from 'react-typewriter-effect';
import styles from './Skills.module.css';

export default function TextSkills({ t }) {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setText([t("skills.skillsText"),
    ])
  }, [t("skills.skillsText")])

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [text])

  

  return (
    <>
      {loading ? <Loading/>:
                <div className={styles.skillsTextEffect}>
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: 'Roboto Mono',
                            color: 'white',
                            fontWeight: 500,
                            fontSize: '1.5em',
                        }}
                        multiTextLoop={false}
                        startDelay={1000}
                        cursorColor="#ebff05"
                        multiText={text}
                        multiTextDelay={1000}
                        typeSpeed={60}
                    />
            </div>
        }
    </>
  )
}
