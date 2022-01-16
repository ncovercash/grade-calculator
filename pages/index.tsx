import Head from "next/head";
import rfdcFactory from "rfdc";
import styles from "./test.module.css";
import { PageProps } from "./types";
const rfdc = rfdcFactory();

export default function Home({
  courses,
  onCourseChange = () => null,
}: PageProps) {
  return (
    <div>
      <Head>
        <title>Test title</title>
      </Head>
      <section>
        <h1
          className={styles.oop}
          onClick={() => {
            const newCourses = Object.assign(
              { a: { totalWeight: 2 } },
              rfdc(courses)
            );
            newCourses.a.totalWeight++;
            onCourseChange(newCourses);
          }}
        >
          {JSON.stringify(courses)}
        </h1>
      </section>
    </div>
  );
}
