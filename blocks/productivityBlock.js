import styles from "../src/styles/productivityBlock.module.scss";
import p1 from "../assets/images/Productivity.png";
import p2 from "../assets/images/ProductivityChart.png";
import BtnPrimary from "../components/main/btnPrimary";

export default function ProductivityBlock() {
  return (
    <section className="Section Section-gray">
      <div className="Shell">
        <div className={styles.Productivity}>
          <div className={styles.Productivity_image}>
            <img src={p1.src} alt="Productivity" />
            <div className={styles.Productivity_image_inner}>
              <img src={p2.src} alt="ProductivityChart" />
            </div>
          </div>
          <div
            className={`${"Section_head"} ${"Section_head-left"} ${
              styles.Productivity_content
            }`}
          >
            <div className={styles.Productivity_content}>
              <span>productivty</span>
              <h3> hosting platform of the new generation</h3>
              <p>
                Host Rongo is the web hosting and cloud partner for small and
                medium-sized businesses.
              </p>
              <p>
                We are experts in IaaS and offer a portfolio of solutions for
                the digital space. As the largest hosting company in Europe, we
                manage more than 8 million customer contracts and host over 12
                million domains.
              </p>
              <div className={styles.Productivity_actions}>
                <div className={styles.Productivity_actions_inner}>
                  <BtnPrimary name="read more" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
