import styles from "../src/styles/introBlock.module.scss";
import Image from "next/image";
import Countdown from "react-countdown";
import BtnPrimary from "../components/main/btnPrimary";
import { FaDollarSign } from "react-icons/fa";
import p1 from "../assets/logos/WPLogo.svg";
import p2 from "../assets/logos/GitHubLogo.svg";
import p3 from "../assets/logos/ClaskLogo.svg";
import p4 from "../assets/logos/RudpalLogo.svg";
import p5 from "../assets/logos/CloudpolarLogo.svg";
import p6 from "../assets/logos/TotalcomLogo.svg";

function IntroBlock() {
  return (
    <div className={styles.Intro_wrapper}>
      <div className={styles.Intro}>
        <div className="Shell">
          <div className={styles.Intro_inner}>
            <div className={styles.Intro_content}>
              <h1>Quick & Secure web hosting</h1>
              <p>
                We provide quick and high-quality hosting services for your
                websites!
              </p>
              <div className={styles.Countdown}>
                <Countdown
                  date={Date.now() + 2592000000}
                  intervalDelay={0}
                  renderer={(props) => (
                    <div className={styles.Countdown_inner}>
                      <div className={styles.Countdown_item}>
                        <span>{props.days} </span>
                        <p>Days</p>
                      </div>
                      <div className={styles.Countdown_item}>
                        <span>{props.hours} </span>
                        <p>Hours</p>
                      </div>
                      <div className={styles.Countdown_item}>
                        <span>{props.minutes} </span>
                        <p>Minutes</p>
                      </div>
                      <div className={styles.Countdown_item}>
                        <span>{props.seconds}</span> <p>Seconds</p>
                      </div>
                    </div>
                  )}
                />
              </div>
              <div className={styles.Intro_action}>
                <BtnPrimary name="purchase hosting" />
              </div>
            </div>

            <div className={styles.Pricing}>
              <div className={styles.Intro_price}>
                <div className={styles.Price_bubble}>
                  <h2>save 89%</h2>
                </div>
                <div className={styles.Intro_month}>
                  <h2>
                    21{" "}
                    <i>
                      <FaDollarSign />
                    </i>
                  </h2>
                  <div className={styles.Price}>
                    <span>00</span>
                    <span>/mon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Partners}>
        <div className={styles.Partner_logo}>
          <Image src={p1} alt="WordPress" />
        </div>
        <div className={styles.Partner_logo}>
          <Image src={p2} alt="GitHub" />
        </div>
        <div className={styles.Partner_logo}>
          <Image src={p3} alt="Clask" />
        </div>
        <div className={styles.Partner_logo}>
          <Image src={p4} alt="Rudpal" />
        </div>
        <div className={styles.Partner_logo}>
          <Image src={p5} alt="Cloudpolar" />
        </div>
        <div className={styles.Partner_logo}>
          <Image src={p6} alt="Totalcom" />
        </div>
      </div>
    </div>
  );
}

export default IntroBlock;
