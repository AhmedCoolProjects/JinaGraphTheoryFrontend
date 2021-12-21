import { Container, Grid, Paper } from "@mui/material";
import images from "constants/images";
import Head from "next/head";
import Image from "next/image";
import graphsData from "@as/data/graphs.json";
import GraphCard from "@comp/cards/GraphCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jina Graph Theory | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full pt-4">
        <Grid container spacing={5}>
          {graphsData.map((graph) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={graph.title}>
              <GraphCard graph={graph} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
