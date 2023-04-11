import styles from "../../src/styles/rate.module.scss";

export default function Rate({ img, title, description, price }) {
  return (
    <div className={styles.Rate}>
      <div className={styles.Rate_inner}>
        <div className={styles.Rate_image}>
          <img src={img.src} alt="Rates" />
        </div>
        <div className={styles.Rate_content}>
          <h4>{title}</h4>
          <p>{description}</p>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}
