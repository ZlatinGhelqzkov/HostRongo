import Package from "../components/secondary/package";

export default function PackagesBlock() {
  return (
    <section className="Section Section-gray">
      <div className="Shell">
        <div className="Section_head">
          <span>Our packages</span>
          <h3>choose your hosting rate</h3>
        </div>
        <div className="Section_body">
          <div className="Packages">
            <Package
              discount="save 86%"
              title="Simple Hosting"
              price="21"
              oldprice="125.00"
              color="#6747c7"
              highlightdetails1="1"
              details1="site"
              highlightdetails2="1"
              details2="email account"
              highlightdetails3="100 GB"
              details3="Traffic"
              highlightdetails4="1X"
              details4="Processor Power and Memory"
            />
            <Package
              discount="save 86%"
              title="Premium Hosting"
              price="49"
              oldprice="189.00"
              discountcolor="#c93445"
              highlightdetails1="Unlimited"
              details1="Number of Sites"
              highlightdetails2="Unlimited"
              details2="Email Accounts"
              highlightdetails3="Unlimited"
              details3="traffic"
              highlightdetails4="2X"
              details4="Processor Power and Memory"
            />
            <Package
              discount="save 86%"
              title="Business Hosting"
              price="64"
              oldprice="256.00"
              color="#6747c7"
              highlightdetails1="All Premium Advantages"
              highlightdetails2="Daily"
              details2="Backpacks"
              highlightdetails3="Free"
              details3="SSL certificate"
              highlightdetails4="4X"
              details4="Processor Power and Memory"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
