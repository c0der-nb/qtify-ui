import { useSwiper } from "swiper/react";
import { useState, useEffect } from "react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsEnd(swiper.isEnd);
        })
    }, [swiper]);

    return (
        <div className={styles['right-navigation']}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
        </div>
    )
}