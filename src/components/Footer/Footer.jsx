import { Button } from '@mui/material';
import React from 'react'
import styles from './Footer.module.css';

export default function Footer({ t }) {


    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer__contenido}>
                    <p>francoguevara.dev@gmail.com</p>
                    <a href='../../CV Franco Guevara español.pdf' download="CV Franco Guevara español.pdf">
                        <button className={styles.footer__contenido_btn}>DONWLOAD CV</button>
                    </a>
                </div>
                <div className={styles.footer__copy}>
                    <p>{t("inicio.copy")}</p>
                </div>
            </div>
        </>
    )
}
