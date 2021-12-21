import { Container, Grid, Paper } from "@mui/material";
import images from "constants/images";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jina Graph Theory | Kruskal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <h1 className="text-center text-3xl my-4 font-semibold opacity-90">
          Kruskal
        </h1>
      </div>
    </div>
  );
}
