import styles from "./Section.module.css";
import { useState, useEffect } from "react";
import { config } from "../../App";
import Card from "../Card/Card";
import axios from "axios";

function Section(props) {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const getTopAlbums = async () => {
    try {
      const apiResponse = await axios.get(config.endpoint);
      return apiResponse.data;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const onLoadHandler = async () => {
      const albumsData = await getTopAlbums();
      setTopAlbumsData(albumsData);
    };
    onLoadHandler();
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles["top-album-section"]}>
        <div className={styles["top-album-heading"]}>
          <p>Top Albums</p>
          <button className={styles["btn-show-collapse"]}>Collapse</button>
        </div>
        <div className={styles["top-album-grid"]}>
          {topAlbumsData.map((album) => (
            <Card
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
