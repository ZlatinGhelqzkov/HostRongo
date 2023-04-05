import Head from "next/head";
import Layout from "../../components/main/layout";
import IntroBlock from "../../blocks/introBlock";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Host Rongo - Quick & Secure Web Hosting</title>
      </Head>
      <IntroBlock />
    </Layout>
  );
}
