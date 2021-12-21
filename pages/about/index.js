import PersonCard from "@comp/cards/PersonCard";
import { Grid } from "@mui/material";
import Head from "next/head";
import persons from "@as/data/persons.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jina Graph Theory | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-center text-2xl my-3 font-semibold opacity-75">
          Created with ❤️ By:
        </h1>
        <Grid container spacing={3}>
          {persons.map((person) => (
            <PersonCard person={person} key={person.id} />
          ))}
        </Grid>
      </div>
    </div>
  );
}
