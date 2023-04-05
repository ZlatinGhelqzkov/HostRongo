import styles from "../../src/styles/btnPrimary.module.scss";

function BtnPrimary({ name, color, fun }) {
  return (
    <>
      {color === "#6747c7" ? (
        <button
          onClick={fun}
          style={{ background: color }}
          className={styles.btnPrimary}
        >
          {name}
        </button>
      ) : (
        <button
          onClick={fun}
          style={{ background: color }}
          className={styles.btnPrimary}
        >
          {name}
        </button>
      )}
    </>
  );
}

export default BtnPrimary;
