import styles from "../../src/styles/package.module.scss";
import { FaDollarSign } from "react-icons/fa";
import BtnPrimary from "../main/btnPrimary";

export default function Package({
  discount,
  discountcolor,
  title,
  price,
  oldprice,
  color,
  highlightdetails1,
  details1,
  highlightdetails2,
  details2,
  highlightdetails3,
  details3,
  highlightdetails4,
  details4,
}) {
  return (
    <div className={styles.Package}>
      <div className={styles.Package_inner}>
        <div className={styles.Package_pricing}>
          <div
            className={styles.Package_discount}
            style={{ background: discountcolor }}
          >
            <span>{discount}</span>
          </div>
          <h4>{title}</h4>
          <div className={styles.Package_month}>
            <h4>
              {price}{" "}
              <i>
                <FaDollarSign />
              </i>
            </h4>
            <div className={styles.Price}>
              <span>00</span>
              <span>/mon</span>
            </div>
          </div>
          <span>
            <i>
              <FaDollarSign />
            </i>
            {oldprice}
          </span>
        </div>
        <BtnPrimary name="Buy a package" color={color} />
        <div className={styles.Package_details}>
          <ul>
            <li>
              <h5>{highlightdetails1}</h5>
              <p>{details1}</p>
            </li>
            <li>
              <h5>{highlightdetails2}</h5>
              <p>{details2}</p>
            </li>
            <li>
              <h5>{highlightdetails3}</h5>
              <p>{details3}</p>
            </li>
            <li>
              <h5>{highlightdetails4}</h5>
              <p>{details4}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
