import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import styles from './Projects.module.css';

export default function Carrousel() {


    return (
        <>
            <Swiper
                minHeight={500}
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide id={styles.slickCarousel} >Slide 1</SwiperSlide>
                <SwiperSlide id={styles.slickCarousel}>Slide 2</SwiperSlide>
                <SwiperSlide id={styles.slickCarousel}>Slide 3</SwiperSlide>
                <SwiperSlide id={styles.slickCarousel}>Slide 4</SwiperSlide>
                <SwiperSlide id={styles.slickCarousel}>Slide 5</SwiperSlide>
                <SwiperSlide id={styles.slickCarousel}>Slide 6</SwiperSlide>
                <SwiperSlide id={styles.slickCarousel}>Slide 7</SwiperSlide>
                <SwiperSlide id={styles.slickCarousel}>Slide 8</SwiperSlide>
                <SwiperSlide id={styles.slickCarousel}>Slide 9</SwiperSlide>
            </Swiper>
        </>
    )
}
