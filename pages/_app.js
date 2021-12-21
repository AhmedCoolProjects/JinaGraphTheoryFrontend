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
