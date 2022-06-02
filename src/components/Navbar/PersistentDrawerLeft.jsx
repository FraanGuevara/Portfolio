import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
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

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

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


export default function PersistentDrawerLeft(props) {
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
            <Box sx={{ display: 'flex'}}>
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
                            <MenuIcon id={styles.navbarBotones}/>
                        </IconButton>
                        <Typography variant="h6" noWrap component="div"
                            sx={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
                            FG
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
                            border:'none'
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    
                >
                    <DrawerHeader id={styles.navbarFondoDrawer} >
                        <IconButton id={styles.navbarBotones} onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>

                    {/* TEXTO E ICONOS DE ARRIBA */}
                    <List id={styles.navbarFondoDrawer}>
                        {['About me', 'Experience', 'Proyects', 'Contact me'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton id={styles.navbarBotonesTexto}>
                                    <ListItemIcon id={styles.navbarBotones}>
                                        {index === 0 ? <PersonPinIcon/> :
                                            index === 1 ? <WorkIcon/> :
                                                index === 2 ? <CodeIcon/> :
                                                    <MailIcon/>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    {/* TEXTO E ICONOS DE ABAJO */}
                    <List id={styles.navbarFondoDrawer} sx={{height:'100%', display:'flex', flexDirection:'column', justifyContent:'end'}}>
                        {['Git-hub', 'Linkedin', 'Gmail'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton id={styles.navbarBotonesTexto}>
                                    <ListItemIcon id={styles.navbarBotonesRedes}>
                                        {index === 0 ? <GitHubIcon /> :
                                            index === 1 ? <LinkedInIcon /> :
                                                <AlternateEmailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
        </HideOnScroll>
    );
}
