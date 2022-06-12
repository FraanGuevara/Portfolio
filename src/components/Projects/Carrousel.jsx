import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import styles from './Projects.module.css';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
import BotoneraCardCarousel from './BotoneraCardCarousel';

export default function Carrousel({ setLinkIframe }) {

    const [mobile, setMobile] = useState(3);

    const cellphone = useMediaQuery({
        query: '(min-width: 1000px)'
    })


    useEffect(() => {
        if (!cellphone) {
            setMobile(1);
        } else {
            setMobile(3);
        }
    }, [cellphone])

    /* Links PAGINAS */
    const links = [
        {
            auraflow: 'https://auraflow.netlify.app',
            sapphire: 'https://sapphirebar.netlify.app',
            mimi: 'https://www.mimipasteleria.com.ar',
            pilates: 'https://ar-pilates.netlify.app/index.html',
            colorGame: 'https://fraanguevara.github.io/ColorGame-JS/',
            portfolio: 'https://portfolio-fg.netlify.app/',
            gitHub: 'https://github.com/FraanGuevara'
        }
    ];

    /* Links REPOSITORIOS */
    const repositorios = [
        {
            auraflow: 'https://github.com/FraanGuevara/AppReact',
            sapphire: 'https://github.com/FraanGuevara/ProyectoJS',
            mimi: 'https://github.com/FraanGuevara/ProyectoPasteleria',
            pilates: 'https://ar-pilates.netlify.app/index.html',
            rosarioJobs: 'https://github.com/FraanGuevara/app-buscador-empleos',
            colorGame: 'https://github.com/FraanGuevara/ColorGame-JS',
            portfolio: 'https://github.com/FraanGuevara/Portfolio',
            gitHub: 'https://github.com/FraanGuevara?tab=repositories'
        }
    ];



    return (
        <>
            <Swiper
                minHeight={500}
                slidesPerView={mobile}
                spaceBetween={30}
                freeMode={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselAuraflow}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].auraflow}
                                repositorio={repositorios[0].auraflow}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>Auraflow Store</p>
                            <p className={styles.textCardCarousel}>
                                e-commerce de Gorras, donde el usuario va a poder ver la cantidad de productos total de la pagina, filtrar por categorias, agregar items al carrito y luego realizar el checkout del mismo.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselSapphire}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].sapphire}
                                repositorio={repositorios[0].sapphire}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>Sapphire Bar</p>
                            <p className={styles.textCardCarousel}>
                                El proyecto se basa en un "recibidor" de clientes para bar/restaurante. Cuenta con un sistema de reservas y 2 carritos. La idea es que la App corra en una terminal de pantalla tactil en la entrada (del bar o restaurante) para que las personas puedan, ya sea solicitar una mesa, realizar un pedido de tragos y/o comida para llevar.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselMimi}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].mimi}
                                repositorio={repositorios[0].mimi}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>Mimi Pasteleria</p>
                            <p className={styles.textCardCarousel}>
                                Pagina para "Mimi Pasteleria" de Mara Schimpf, web estatica con carta de productos, links a redes, boton de whatsapp.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselPilates}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].pilates}
                                repositorio={repositorios[0].pilates}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>Ar Pilates</p>
                            <p className={styles.textCardCarousel}>
                                Web estatica, maquetacion e implementacion de sass.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselRosario}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].rosarioJobs}
                                repositorio={repositorios[0].rosarioJobs}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>Rosario Jobs</p>
                            <p className={styles.textCardCarousel}>
                                Pagina de busqueda de empleos, para bootcamp Tzuzul code React.
                                <p className={styles.textCardCarousel}>
                                Logueo Empleador [crear empleos/ver empleos generados/ ver cantidad de postulantes en cada empleo]
                                </p>
                                Logueo Trabajador [ver empleos/postularse/filtrar/guardar empleos favoritos]
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselColor}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].colorGame}
                                repositorio={repositorios[0].colorGame}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>Color Game</p>
                            <p className={styles.textCardCarousel}>
                            juego que se basa en adivinar el color que se describe en el titulo en forma de rgb, clickeando cada uno de los cuadrados.
                            Tiene la funcionalidad de cambiar el nivel de dificultad con los botones EASY / STANDAR / HARD.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselPortfolio}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].portfolio}
                                repositorio={repositorios[0].portfolio}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>Portfolio</p>
                            <p className={styles.textCardCarousel}>
                                Portfolio creado en React Js con implementacion de otras tecnologias.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id={styles.slickCarousel} className={styles.slickCarouselGithub}>
                    <div className={styles.capa}>
                        <div id={styles.iconosCardCarousel}>
                            <BotoneraCardCarousel
                                link={links[0].gitHub}
                                repositorio={repositorios[0].gitHub}
                                setLinkIframe={setLinkIframe}
                            />
                        </div>
                        <div>
                            <p className={styles.titleCardCarousel}>Github</p>
                            <p className={styles.textCardCarousel}>
                                Github propio donde van a poder ver los proyectos finalizados y en los cuales estoy trabajando actualmente.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
