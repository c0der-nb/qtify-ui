import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ data, type }) {
  if (type === 'album') {
    return (
      <div className={styles.card}>
        <div className={styles["card-img-pill"]}>
          <img src={data.image} className={styles["card-image"]} alt={data.title} />
          <div className={styles.banner}>
            <Chip
              sx={{
                backgroundColor: "var(--color-black)",
                color: "var(--color-white)",
                fontSize: "10px",
              }}
              size="small"
              label={data.follows + " Follows"}
            />
          </div>
        </div>
        <p>{data.title}</p>
      </div>
    );
  }
  else if (type === 'song') {
    return (
      <div className={styles.card}>
        <div className={styles["card-img-pill"]}>
          <img src={data.image} className={styles["card-image"]} alt={data.title} />
          <div className={styles.banner}>
            <Chip
              sx={{
                backgroundColor: "var(--color-black)",
                color: "var(--color-white)",
                fontSize: "10px",
              }}
              size="small"
              label={data.likes + " Likes"}
            />
          </div>
        </div>
        <p>{data.title}</p>
      </div>
    )
  }
}

export default Card;
