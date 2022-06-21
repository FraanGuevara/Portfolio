import { Button } from '@mui/material';
import React from 'react'
import styles from './Footer.module.css';

export default function Footer({ t }) {
console.log(t("footer.title"));

    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer__contenido}>
                    <p>francoguevara.dev@gmail.com</p>
                    <a href={t("download.download")} target="_blank">
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
