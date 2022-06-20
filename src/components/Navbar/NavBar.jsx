import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MailIcon from '@mui/icons-material/Mail';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import HideOnScroll from './HideOnScroll';
import styles from './styles.module.css';
import SwitchLanguage from './SwitchLanguage';
import logo from '../../img/LogoFG.png'
import { Link } from 'react-scroll';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';



function LabelBottomNavigation({ t }) {


    return (
        <Box sx={{ width: 700, display: 'flex', justifyContent: 'space-around' }}>
            <Link to="hrefAboutMe" spy={true} smooth={true} offset={0} duration={500}>
                <Button id={styles.navbarBotonesTexto}>
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <PersonPinIcon id={styles.navbarBotones} />
                        {t("navbar.aboutMe")}
                    </div>
                </Button>
            </Link>
            <Link to="hrefProjects" spy={true} smooth={true} offset={0} duration={500}>
                <Button id={styles.navbarBotonesTexto}>
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <WorkIcon id={styles.navbarBotones} />
                        {t("navbar.experience")}
                    </div>
                </Button>
            </Link>
            <Link to="hrefSkills" spy={true} smooth={true} offset={0} duration={500}>
                <Button id={styles.navbarBotonesTexto}>
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <CodeIcon id={styles.navbarBotones} />
                        {t("navbar.projects")}
                    </div>
                </Button>
            </Link>
            <Link to="hrefContact" spy={true} smooth={true} offset={0} duration={500}>
                <Button id={styles.navbarBotonesTexto}>
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <MailIcon id={styles.navbarBotones} />
                        {t("navbar.contact")}
                    </div>
                </Button>
            </Link>
            <SwitchLanguage />
        </Box>
    );
}


export default function Navbar({ props, t }) {

    return (
        <>
            <HideOnScroll {...props}>
                <AppBar id={styles.navbarFondo}>
                    <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <Link to='hrefHome' spy={true} smooth={true} offset={0} duration={500}>
                            <img src={logo} alt="logo FG" style={{ width: '85px', margin: '10px 0' }} />
                        </Link>
                        <LabelBottomNavigation
                            t={t}
                        />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    )
}
