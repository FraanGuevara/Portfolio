import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { CopyAll } from '@mui/icons-material';

export default function SwitchLanguage() {

    const [t, i18n] = useTranslation('global');
    const [checked, setChecked] = useState(localStorage.getItem('checked') === 'false' ? false : true);


    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#65C466',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
        },
    }));


const changeLanguage = () => {
    if (i18n.language === 'es') {
        i18n.changeLanguage('en');
        localStorage.setItem('language', 'en');
        localStorage.setItem('checked', 'true');
        setChecked(true);
    } else {
        i18n.changeLanguage('es');
        localStorage.setItem('language', 'es');
        localStorage.setItem('checked', 'false');
        setChecked(false);
    }
}

    return (
        <>
            <Stack style={{marginRight:'50px', display:'flex', height:'100%'}} direction="row" spacing={1} alignItems="center">
                <Typography sx={{color:'#8892b0', fontWeight:'bold', fontSize:'15px', fontFamily:'monospace'}}>ES</Typography>
                <AntSwitch checked={checked} inputProps={{ 'aria-label': 'ant design' }} onClick={()=>changeLanguage()}/>
                <Typography sx={{color:'#8892b0', fontWeight:'bold', fontSize:'15px', fontFamily:'monospace'}}>EN</Typography>
            </Stack>
        </>
    )
}
