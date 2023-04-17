import styles from "../src/styles/aboutBlock.module.scss";
import Image from "next/image";
import p1 from "../assets/images/About1.png";
import p2 from "../assets/images/About2.png";
import p3 from "../assets/images/About3.png";

export default function AboutBlock() {
  const handleSelect = (event) => {
    var tabs =
      event.target.closest("li").parentElement.parentElement.parentElement
        .children[1].children;
    var group = event.target.closest("li").parentElement.children;
    for (var i = 0; i < group.length; i++) {
      group[i].classList.remove(styles.Selected);

      if (event.target.closest("li") === group[i]) {
        for (var j = 0; j < tabs.length; j++) {
          tabs[j].classList.remove(styles.SelectedTab);
        }

        tabs[i].classList.add(styles.SelectedTab);
        event.target.closest("li").classList.add(styles.Selected);
      }
    }
  };

  return (
    <section className="Section">
      <div className="Shell">
        <div className="Section_head">
          <h3>Created for lightning speed</h3>
          <p className={styles.Head_content}>
            We help entrepreneurs taking their first steps online, business
            owners scaling up, large companies, and the partners who help them
            succeed.
          </p>
        </div>
        <div className="Section_body">
          <div className={styles.About}>
            <div className={styles.About_inner}>
              <div className={styles.About_Tab}>
                <ul>
                  <li className={styles.Selected} onClick={handleSelect}>
                    <h4>Uniqie Panel</h4>
                  </li>
                  <li onClick={handleSelect}>
                    <h4>Extreme Speed</h4>
                  </li>
                  <li onClick={handleSelect}>
                    <h4>Optimization Cms</h4>
                  </li>
                </ul>
              </div>

              <div className={styles.About_tabs}>
                <div
                  className={`${styles.About_inner_content} ${styles.SelectedTab}`}
                >
                  <div className={styles.About_inner_image}>
                    <Image src={p1} alt="Unique Panel" />
                  </div>
                  <div className={styles.About_inner_description}>
                    <h3>When our power of choice</h3>
                    <p>
                      {" "}
                      Reliability and security are engineered into the core of
                      our products.
                    </p>

                    <p>
                      Whether building an online presence by securing a domain,
                      building a website, moving back-office processes to the
                      cloud, or orchestrating a container cluster, our
                      comprehensive product range offers a best-in-class app,
                      server, or service.
                    </p>
                  </div>
                </div>

                <div className={styles.About_inner_content}>
                  <div className={styles.About_inner_image}>
                    <Image src={p2} alt="Unique Panel" />
                  </div>
                  <div className={styles.About_inner_description}>
                    <h3>When our power of choice</h3>
                    <p>
                      {" "}
                      Reliability and security are engineered into the core of
                      our products.
                    </p>

                    <p>
                      Whether building an online presence by securing a domain,
                      building a website, moving back-office processes to the
                      cloud, or orchestrating a container cluster, our
                      comprehensive product range offers a best-in-class app,
                      server, or service.
                    </p>
                  </div>
                </div>

                <div className={styles.About_inner_content}>
                  <div className={styles.About_inner_image}>
                    <Image src={p3} alt="Unique Panel" />
                  </div>
                  <div className={styles.About_inner_description}>
                    <h3>When our power of choice</h3>
                    <p>
                      {" "}
                      Reliability and security are engineered into the core of
                      our products.
                    </p>

                    <p>
                      Whether building an online presence by securing a domain,
                      building a website, moving back-office processes to the
                      cloud, or orchestrating a container cluster, our
                      comprehensive product range offers a best-in-class app,
                      server, or service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
