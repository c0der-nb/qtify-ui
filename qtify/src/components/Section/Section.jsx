import styles from "./Section.module.css";
import Card from "../Card/Card";

function Section({topAlbums=[], newAlbums=[]}) {
  return (
    <div className={styles.section}>
      <div className={styles["album-section"]}>
        <div className={styles["album-heading"]}>
          <p>{topAlbums.length > 0 ? 'Top Albums' : 'New Albums'}</p>
          <button className={styles["btn-show-collapse"]}>Collapse</button>
        </div>
        <div className={styles["album-grid"]}>
          {
            topAlbums.length > 0 ? 
            topAlbums.map((album) => <Card image={album.image} follows={album.follows} title={album.title} />) : 
            newAlbums.map((album) => <Card image={album.image} follows={album.follows} title={album.title} />)
            }
        </div>
      </div>
    </div>
  );
}

export default Section;
