import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({image, follows, title}) {
  return (
    <div className={styles.card}>
      <div className={styles["card-img-pill"]}>
        <img src={image} className={styles["card-image"]} alt={title} />
        <Chip
          sx={{
            backgroundColor: "var(--color-black)",
            color: "var(--color-white)",
            fontSize: "10px",
            marginLeft: "6px",
            marginTop: "1px",
          }}
          size="small"
          label={follows+' Follows'}
        />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default Card;
