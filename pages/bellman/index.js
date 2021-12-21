import EdgeCard from "@comp/cards/EdgeCard";
import {
  AddBoxRounded,
  RestartAltRounded,
  Telegram,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const Graph = {
    edges: [],
  };
  const [graph, setGraph] = useState(Graph);
  const addEdgeToGraph = (edge) => {
    setGraph({
      ...graph,
      edges: [...graph.edges, edge],
    });
  };
  const deleteFromGraph = (index) => {
    let newEdges = [...graph.edges];
    let finalEdges = newEdges.filter((_, i) => i !== index);
    setGraph({
      edges: finalEdges,
    });
  };
  const changeEdgeLeftNode = (index, newNode) => {
    let newEdges = [...graph.edges];
    newEdges[index].leftNode = newNode;
    setGraph({
      ...graph,
      edges: newEdges,
    });
  };
  const changeEdgeRightNode = (index, newNode) => {
    let newEdges = [...graph.edges];
    newEdges[index].rightNode = newNode;
    setGraph({
      ...graph,
      edges: newEdges,
    });
  };
  const changeEdgeWeight = (index, newWeight) => {
    let newEdges = [...graph.edges];
    newEdges[index].weight = newWeight;
    setGraph({
      ...graph,
      edges: newEdges,
    });
  };
  return (
    <div>
      <Head>
        <title>Jina Graph Theory | Bellman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <h1 className="text-center text-3xl my-4 font-semibold opacity-90">
          Bellman
        </h1>
        <div>
          {graph.edges.map((edgeItem, index) => (
            <EdgeCard
              key={index}
              edgeLeftNode={edgeItem.leftNode}
              edgeRightNode={edgeItem.rightNode}
              edgeWeight={edgeItem.weight}
              index={index}
              changeEdgeLeftNode={changeEdgeLeftNode}
              changeEdgeRightNode={changeEdgeRightNode}
              changeEdgeWeight={changeEdgeWeight}
              deleteFromGraph={deleteFromGraph}
            />
          ))}
          <div className="flex w-full flex-row justify-between items-center">
            <IconButton
              onClick={() => {
                addEdgeToGraph({
                  leftNode: "",
                  weight: 0,
                  rightNode: "",
                });
              }}
            >
              <AddBoxRounded fontSize="medium" color="primary" />
            </IconButton>
            <div className="flex flex-row items-center space-x-3">
              {graph.edges.length ? (
                <Button
                  color="primary"
                  size="large"
                  onClick={() => {
                    setGraph(Graph);
                  }}
                  endIcon={
                    <RestartAltRounded fontSize="medium" color="primary" />
                  }
                >
                  reset
                </Button>
              ) : null}
              <Button
                color="primary"
                size="large"
                onClick={() => {
                  console.log("graph1: ", graph);
                }}
                endIcon={<Telegram fontSize="medium" color="primary" />}
              >
                submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
