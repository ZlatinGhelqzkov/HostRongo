import styles from "../src/styles/ratesBlock.module.scss";
import Rate from "../components/secondary/rate";
import service1 from "../assets/images/Services1.png";
import service2 from "../assets/images/Services2.png";
import service3 from "../assets/images/Services3.png";
import service4 from "../assets/images/Services4.png";

export default function Rates() {
  return (
    <section className="Section Section-border">
      <div className="Shell">
        <div className="Section_head">
          <span> our packages </span>
          <h3>choose your hosting rate</h3>
        </div>
        <div className="Section_body">
          <div className="Rates">
            <Rate
              img={service1}
              title="Shared hosting"
              description="Suitable for small and medium sites."
              price="Only $ 19.00 / month"
            />
            <Rate
              img={service2}
              title="Cloud Server"
              description="For sites with high traffic and large project."
              price="Only $ 56.00 / month"
            />
            <Rate
              img={service3}
              title="VPS hosting"
              description="Dedicated resources for scaling your add-ons."
              price="Only $ 34.00 / month"
            />
            <Rate
              img={service4}
              title="Domains"
              description="Find the perfect name for your website."
              price="Only $ 19.00 / month"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
