import styles from "./Carousel.module.css";
// import Swiper core and required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useEffect } from "react";

// Import Swiper styles
import 'swiper/css';
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    }, [data, swiper]);
    return <></>
}

function Carousel({data, renderComponent}) {
    return (
        <div className={styles.wrapper}>
      <Swiper
        // install Swiper modules
        style={{padding: "0px 20px"}}
        initialSlide={0}
        freeMode
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>
        {data.map(ele => <SwiperSlide>{renderComponent(ele)}</SwiperSlide>)}
      </Swiper>
      </div>
    );
  };

export default Carousel;