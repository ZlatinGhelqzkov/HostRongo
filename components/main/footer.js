import styles from "../../src/styles/footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logos/LogoFooter.svg";
import Payment from "../../assets/logos/PaymentMethod.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className="Shell">
        <div className={styles.Footer_inner}>
          <div className={styles.Footer_lists}>
            <div className={styles.Footer_list}>
              <h4>Information</h4>
              <ul>
                <li>
                  <Link href="/">Server status</Link>
                </li>
                <li>
                  <Link href="/">Affiliate Program</Link>
                </li>
                <li>
                  <Link href="/">Reviews</Link>
                </li>
                <li>
                  <Link href="/">Payment method</Link>
                </li>
              </ul>
            </div>

            <div className={styles.Footer_list}>
              <h4>Hosting</h4>
              <ul>
                <li>
                  <Link href="/">Hosting</Link>
                </li>
                <li>
                  <Link href="/">VPN Hosting</Link>
                </li>
                <li>
                  <Link href="/">Cloud Server</Link>
                </li>
                <li>
                  <Link href="/">WordPress Hosting</Link>
                </li>
                <li>
                  <Link href="/">CMS hosting</Link>
                </li>
              </ul>
            </div>

            <div className={styles.Footer_list}>
              <h4>Domains</h4>
              <ul>
                <li>
                  <Link href="/">Domain Transfer</Link>
                </li>
                <li>
                  <Link href="/">Free Domain</Link>
                </li>
                <li>
                  <Link href="/">Free XYZ Domain</Link>
                </li>
                <li>
                  <Link href="/">Buy SSL</Link>
                </li>
                <li>
                  <Link href="/">Domain Registration</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.Footer_actions}>
            <div className={styles.Footer_logo}>
              <Image src={Logo} alt="Footer_Logo" />
            </div>
            <div className={styles.Footer_content}>
              <p>
                We help entrepreneurs taking their first steps online, business
                owners scaling up, large companies, and the partners who help
                them succeed.
              </p>
            </div>
            <div className={styles.Footer_payments}>
              <Image src={Payment} alt="Footer_payments" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Footer_social}>
        <div className="Shell">
          <div className={styles.Footer_social_inner}>
            <div className={styles.Social}>
              <h4>Get Social: </h4>
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaTwitter />
            </div>
            <p>
              Host Rongo - Multipurpose WP Theme with Elementor Page Builder. ©
              2019 <Link href="/">Zemez</Link> inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
