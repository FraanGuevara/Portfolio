import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import styles from './Contact.module.css';
import { useState } from 'react';
import {sendMessageForm} from '../../service/emailjs'
import { useRef } from 'react';

export default function FormEmail({t}) {
    const formPort = useRef();
    const [formSend, setFormSend] = useState(false);
    const [errorSend, setErrorSend] = useState(false);

    return (
        <>
            <div className={styles.formEmailContainer}>
                <p className={styles.tituloForm}>
                    {t("contactFormEmail.title")} 
                </p>
                <div className={styles.container}>
                    <Formik
                        initialValues={{
                            nombre: '',
                            correo: '',
                            texto: ''
                        }}
                        validate={(valores) => {
                            let errores = {};

                            //validacion nombre
                            if (!valores.nombre) {
                                errores.nombre = t("contactFormEmail.errorName1") ;
                                setFormSend(false);
                            } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                                errores.nombre = t("contactFormEmail.errorName2")
                            }

                            //validacion email
                            if (!valores.correo) {
                                errores.correo = t("contactFormEmail.errorEmail1")
                                setFormSend(false);
                            } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(valores.correo)) {
                                errores.correo = t("contactFormEmail.errorEmail2")
                            }

                            //validacion texto
                            if (!valores.texto) {
                                errores.texto = t("contactFormEmail.errorText")
                                setFormSend(false);
                            }

                            return errores;
                        }}
                        onSubmit={( { resetForm }) => {
                            let responseForm = sendMessageForm(formPort.current);
                            if(responseForm === 200){
                                setFormSend(true);
                            }else{
                                setErrorSend(true)
                                setTimeout(()=>{
                                    setErrorSend(false)
                                },5000)
                            }
                            resetForm();
                        }}
                    >
                        {({ errors }) => (
                            <Form
                            ref={formPort}
                            className={styles.containerForm}
                            >
                                <div>
                                    <Field
                                        className={styles.containerForm__inputs}
                                        type='text'
                                        id='nombre'
                                        name='nombre'
                                        placeholder={t("contactFormEmail.placeholderName")}
                                        autoComplete='off'
                                    />
                                    <ErrorMessage name='nombre' component={() => (<div className={styles.erroresForm}>{errors.nombre}</div>)} />
                                </div>
                                <div>
                                    <Field
                                        className={styles.containerForm__inputs}
                                        type='email'
                                        id='correo'
                                        name='correo'
                                        placeholder={t("contactFormEmail.placeholderEmail")}
                                        autoComplete='off'
                                    />
                                    <ErrorMessage name='correo' component={() => (<div className={styles.erroresForm}>{errors.correo}</div>)} />
                                </div>
                                <div>
                                    <Field
                                        className={styles.containerForm__inputText}
                                        id='texto'
                                        name='texto' as='textarea'
                                        placeholder={t("contactFormEmail.placeholderText")}
                                        autoComplete='off'
                                    />
                                    <ErrorMessage name='texto' component={() => (<div className={styles.erroresForm}>{errors.texto}</div>)} />
                                </div>
                                <div className={styles.containerButtonsForm}>
                                    <button
                                        className={styles.buttonForm}
                                        type="submit"
                                    >
                                        {t("contactFormEmail.buttonSend")}
                                    </button>
                                </div>
                                {formSend && <p className={styles.formSendOk}>{t("contactFormEmail.sendMessageOk")}</p>}
                                {errorSend && <p className={styles.formSendError}>{t("contactFormEmail.sendMessageError")}</p>}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}
