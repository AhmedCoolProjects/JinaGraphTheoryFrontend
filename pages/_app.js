import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "@comp/utils/Layout";
import Head from "next/head";
import { AppProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Jina Graph Theory, a platform to resolve probems using popular GT algorithms"
        />
        <meta
          name="keywords"
          content="Jina, Graph Theory, Algorithms, Problems, GT, GT Algorithms, GT Problems"
        />
        <meta
          name="og:description"
          content="Jina Graph Theory, a platform to resolve probems using popular GT algorithms"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* favicon.ico */}
        <link rel="icon" href="/favicon.ico" />
        {/* apple-touch-icon.png */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      </Head>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}

export default MyApp;
