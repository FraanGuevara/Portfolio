import React from 'react'
import styles from './Container.module.css';
import AboutMe from '../AboutMe/AboutMe';
import Home from '../Home/Home';
import NavbarOrDrawer from '../Navbar/NavbarOrDrawer';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';



export default function Container({ t }) {

  return (
    <>
      <div id={styles.container}>
      <NavbarOrDrawer t={t} />
      <Home t={t} />
      <AboutMe t={t} />
      <Projects t={t} />
      <Skills t={t}/>
      <Contact t={t}/>
      </div>
      
    </>
  )
}
