import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HideOnScroll from './HideOnScroll';
import { createTheme } from '@mui/material/styles';
import styles from './styles.module.css';
import SwitchLanguage from './SwitchLanguage';
import logo from '../../img/LogoFG.png'
import { Link } from 'react-scroll';

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


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft({ props, t }) {
    /* console.log(t) */
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <HideOnScroll {...props}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar id={styles.navbarFondo}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon id={styles.navbarBotones} />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div"
                            sx={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
                            <Link to="hrefHome" spy={true} smooth={true} duration={500}>
                                <img src={logo} alt="Logo FG" style={{ width: '70px', margin: '10px 0' }} />
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            border: 'none'
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >

                    <DrawerHeader id={styles.navbarFondoDrawer} >
                        <div id={styles.navbarFondoDrawer} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <SwitchLanguage />
                        </div>
                        <IconButton id={styles.navbarBotones} onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>

                    {/* TEXTO E ICONOS DE ARRIBA */}
                    <List id={styles.navbarFondoDrawer}>
                        {[t("navbar.aboutMe"), t("navbar.experience"), t("navbar.projects"), t("navbar.contact")].map((text, index) => (
                            <Link to={index === 0 ? 'hrefAboutMe' :
                                index === 1 ? 'hrefProjects' :
                                    index === 2 ? 'hrefSkills' :
                                        'hrefContact'} spy={true} smooth={true} offset={0} duration={500}>
                                <ListItem key={text} disablePadding>
                                    <ListItemButton id={styles.navbarBotonesTexto}>
                                        <ListItemIcon id={styles.navbarBotones}>
                                            {index === 0 ? <PersonPinIcon /> :
                                                index === 1 ? <WorkIcon /> :
                                                    index === 2 ? <CodeIcon /> :
                                                        <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>

                    {/* TEXTO E ICONOS DE ABAJO */}
                    <List id={styles.navbarFondoDrawer} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
                        {['Git-hub', 'Linkedin', 'Gmail'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <a
                                    style={{ textDecoration: 'none' }}
                                    href={index === 0 ? 'https://github.com/FraanGuevara' :
                                        index === 1 ? 'https://www.linkedin.com/in/fraanguevara/' :
                                            'mailto:francoguevara.dev@gmail.com'}>
                                    <ListItemButton id={styles.navbarBotonesTexto}>
                                        <ListItemIcon id={styles.navbarBotonesRedes}>
                                            {index === 0 ? <GitHubIcon /> :
                                                index === 1 ? <LinkedInIcon /> :
                                                    <AlternateEmailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </a>

                            </ListItem>
                        ))}
                    </List>

                </Drawer>
            </Box>
        </HideOnScroll>
    );
}
