import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MailIcon from '@mui/icons-material/Mail';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import HideOnScroll from './HideOnScroll';
import { createTheme } from '@mui/material/styles';
import styles from './styles.module.css';
import SwitchLanguage from './SwitchLanguage';
import logo from '../../img/LogoFG.png'
import { Link } from 'react-router-dom';


let theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#26e4a0',
        },
        text: {
            primary: '#888899',
        },
    },
});



function LabelBottomNavigation({t}) {
    const [value, setValue] = useState('recents');
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <>
        <div style={{display:'flex', flexDirection:'row'}}>
        <BottomNavigation sx={{ width: '700px', backgroundColor:'#111827' }} value={value} onChange={handleChange}>
            <BottomNavigationAction
            id={styles.textEffecSvg}
                theme={theme}
                label={t("navbar.aboutMe")}
                value={t("navbar.aboutMe")}
                icon={<PersonPinIcon id={styles.navbarBotones}/>}
                />
            <BottomNavigationAction
                theme={theme}
                label={t("navbar.experience")}
                value={t("navbar.experience")}
                icon={<WorkIcon id={styles.navbarBotones}/>}
                />
            <BottomNavigationAction
                theme={theme}
                label={t("navbar.projects")}
                value={t("navbar.projects")}
                icon={<CodeIcon id={styles.navbarBotones}/>}
                />
            <BottomNavigationAction
                theme={theme}
                label={t("navbar.contact")}
                value={t("navbar.contact")}
                icon={<MailIcon id={styles.navbarBotones}/>} />
            </BottomNavigation>
            <SwitchLanguage/>
        </div>
        </>
        
    );
}


export default function Navbar({props, t}) {

    return (
        <>
            <HideOnScroll {...props}>
                <AppBar id={styles.navbarFondo}>
                    <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <Link to='/portfolio'>
                            <img src={logo} alt="logo FG" style={{width:'85px', margin:'10px 0'}} />
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
