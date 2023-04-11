import Head from "next/head";
import Layout from "../../components/main/layout";
import IntroBlock from "../../blocks/introBlock";
import RatesBlock from "../../blocks/ratesBlock";
import ProductivityBlock from "../../blocks/productivityBlock";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Host Rongo - Quick & Secure Web Hosting</title>
      </Head>
      <IntroBlock />
      <RatesBlock />
      <ProductivityBlock />
    </Layout>
  );
}
