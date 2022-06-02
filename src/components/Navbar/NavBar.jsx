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

let theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#ebff05',
        },
        secondary: {
            main: '#26e4a0',
        },
        text: {
            primary: '#888899',
        },
    },
});



function LabelBottomNavigation() {
    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{ width: '700px', backgroundColor:'#303030' }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                theme={theme}
                label="About me"
                value="About me"
                icon={<PersonPinIcon id={styles.navbarBotones}/>}
            />
            <BottomNavigationAction
                theme={theme}
                label="Experience"
                value="Experience"
                icon={<WorkIcon id={styles.navbarBotones}/>}
            />
            <BottomNavigationAction
                theme={theme}
                label="Proyects"
                value="Proyects"
                icon={<CodeIcon id={styles.navbarBotones}/>}
            />
            <BottomNavigationAction
                theme={theme}
                label="Contact me"
                value="Contact me"
                icon={<MailIcon id={styles.navbarBotones}/>} />
        </BottomNavigation>
    );
}


export default function Navbar(props) {


    return (
        <>
            <HideOnScroll {...props}>
                <AppBar id={styles.navbarFondo}>
                    <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <h2>Logo</h2>
                        <LabelBottomNavigation />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    )
}
