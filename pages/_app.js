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
          content="Jina Food, Your perfect restaurant for your next meal"
        />
        <meta
          name="keywords"
          content="Jina Food, Your perfect restaurant for your next meal"
        />
        <meta
          name="og:title"
          content="Jina Food: Your perfect restaurant for your next meal"
        />
        <meta
          name="og:description"
          content="Jina Food, Your perfect restaurant for your next meal"
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
