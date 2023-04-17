import styles from "../src/styles/goalsBlock.module.scss";
import Image from "next/image";
import backgroundgoals from "../assets/backgrounds/background_goals.webp";
import BtnPrimary from "../components/main/btnPrimary";
import p1 from "../assets/images/CustomerService.png";

export default function GoalsBlock() {
  return (
    <section className="Section Section-nopadding">
      <div
        className={styles.Goals_background}
        style={{ backgroundImage: "url(" + backgroundgoals.src + ")" }}
      >
        <div className="Shell">
          <div className={styles.Goals}>
            <div className="Section_head Section_head-left">
              <div className={styles.Goals_content}>
                <span>best in the industry</span>
                <h4>Your success is our goal</h4>
                <p style={{ color: "#fff", margin: "0 0 40px 0" }}>
                  Customer service is paramount, which is why we offer a
                  dedicated customer service agent to every customer. Your own
                  personal consultant will take the time to get to know you and
                  your business.
                </p>
                <div className={styles.Goals_action}>
                  <div className={styles.Goals_action_inner}>
                    <BtnPrimary name="Read More" />
                  </div>
                </div>
              </div>
            </div>
            <div className="Section_body">
              <div className={styles.Goals_inner_image}>
                <Image src={p1} alt="CustomerService" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
