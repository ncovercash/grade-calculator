import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Grade Calculator</title>

        <link rel="stylesheet" href="dist/css/shared.styles.css" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400&family=M+PLUS+Rounded+1c:wght@300;400;500;700&family=Material+Icons+Round&display=swap"
          rel="stylesheet"
        />

        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          property="description"
          content="A versatile grade calculator that supports drops, replacements, and more."
        />
        <meta
          name="keywords"
          content="gradebook, grades, university, college, grade, mark, scores, test, exam"
        />
        <meta
          name="subject"
          content="gradebook, grades, university, college, grade, mark, scores, test, exam"
        />
        <meta name="copyright" content="Noah Overcash" />
        <meta name="language" content="EN" />
        <meta name="robots" content="index,follow" />
        <meta name="reply-to" content="me@ncovercash.dev" />
        <meta name="theme-color" content="#F87171" />

        <meta name="apple-mobile-web-app-title" content="Grade Calculator" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />

        <meta name="msapplication-tooltip" content="Grade Calculator" />
        <meta name="mssmarttagspreventparsing" content="true" />
        <meta
          name="msapplication-starturl"
          content="https://ncovercash.dev/Projects/Grade-Calculator/"
        />
        <meta name="msapplication-window" content="width=1024;height=768" />
        <meta name="msapplication-navbutton-color" content="#F87171" />

        <meta name="application-name" content="Grade Calculator" />
        <meta name="msapplication-TileColor" content="#F87171" />

        <meta property="og:title" content="Grade Calculator" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ncovercash.dev/Projects/Grade-Calculator/"
        />
        <meta
          property="og:description"
          content="A versatile grade calculator that supports drops, replacements, and more.!"
        />
        <meta property="og:site_name" content="Grade Calculator" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:site"
          content="https://ncovercash.dev/Projects/Grade-Calculator/"
        />
        <meta name="twitter:title" content="Grade Calculator" />
        <meta
          name="twitter:description"
          content="A versatile grade calculator that supports drops, replacements, and more."
        />

        <link
          rel="canonical"
          href="https://ncovercash.dev/Projects/Grade-Calculator/"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
