import Head from "next/head";
import styles from "./test.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test title</title>
      </Head>
      <section>
        <h1 className={styles.oop}>Testing</h1>
      </section>
    </div>
  );
}
