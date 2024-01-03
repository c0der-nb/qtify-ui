import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";

function Section({ title, data, type }) {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  }

  return (
    <div className={styles.section}>
      <div className={styles["album-section"]}>
        <div className={styles["album-heading"]}>
          <p>{title}</p>
          <button onClick={handleToggle} className={styles["btn-show-collapse"]}>{!carouselToggle ? "Collapse" : "Show All"}</button>
        </div>
        <div className={styles["album-grid"]}>
          {!carouselToggle
            ? data.map((album) => (
                <Card
                  image={album.image}
                  follows={album.follows}
                  title={album.title}
                />
              ))
            :
              <Carousel 
                data={data}
                renderComponent={(ele) => <Card image={ele.image} follows={ele.follows} title={ele.title}/>}
              />
            }
        </div>
      </div>
    </div>
  );
}

export default Section;
