import styles from "./Hero.module.css";
import HeadphoneImage from "../../assets/vibrating-headphone.svg";

function Hero(props) {
  return (
    <div className={styles["hero-section"]}>
      <div className={styles.wrapper}>
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <img src={HeadphoneImage} width={212} alt={'Headphone'} />
      </div>
    </div>
  );
}

export default Hero;
