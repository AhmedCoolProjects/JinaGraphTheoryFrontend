import { Input, Paper, TextField, IconButton } from "@mui/material";
import { HighlightOffRounded, ArrowRightRounded } from "@mui/icons-material";

function EdgeCard({
  edgeLeftNode,
  edgeRightNode,
  edgeWeight,
  deleteFromGraph,
  changeEdgeLeftNode,
  changeEdgeRightNode,
  index,
  changeEdgeWeight,
}) {
  return (
    <div className="w-full items-center flex flex-row">
      <IconButton onClick={() => deleteFromGraph(index)}>
        <HighlightOffRounded color="primary" size="medium" />
      </IconButton>
      <Paper
        className="flex relative flex-row items-center flex-1 py-3 my-2 px-4 justify-around"
        elevation={3}
      >
        <Input
          type="text"
          placeholder="Node"
          value={edgeLeftNode}
          onChange={(e) => changeEdgeLeftNode(index, e.target.value)}
          variant="contained"
          className="w-[70px]"
        />
        <hr className="h-px flex-1 mx-2" />
        <TextField
          type="number"
          placeholder="Weight"
          className="w-[120px]"
          value={edgeWeight}
          onChange={(e) => changeEdgeWeight(index, parseInt(e.target.value))}
        />
        <hr className="h-px flex-1 ml-2" />
        <ArrowRightRounded
          fontSize="large"
          style={{
            marginRight: 2,
          }}
        />
        <Input
          type="text"
          placeholder="Node"
          value={edgeRightNode}
          onChange={(e) => changeEdgeRightNode(index, e.target.value)}
          variant="outlined"
          className="w-[70px] text-center"
        />
      </Paper>
    </div>
  );
}

export class Edge {
  constructor(leftNode, edgeWeight, rightNode) {
    this.leftNode = leftNode;
    this.edgeWeight = edgeWeight;
    this.rightNode = rightNode;
  }
  setLeftNode(leftNode) {
    this.leftNode = leftNode;
  }
  setRightNode(rightNode) {
    this.rightNode = rightNode;
  }
  setEdgeWeight(edgeWeight) {
    this.edgeWeight = edgeWeight;
  }
}
export class Graph {
  constructor() {
    this.edges = [];
  }
  addEdge() {
    this.edges.push(new Edge("", 0, ""));
    console.log("this: ", this);
  }
  removeEdge(index) {
    this.edges = this.edges.filter((_, i) => i !== index);
  }
}

// class EdgeCard extends Component {
//   state = {
//     leftNode: "",
//     rightNode: "",
//     edgeWeight: "",
//   };
//   setLeftNode = (e) => {
//     this.setState({ leftNode: e.target.value });
//   };
//   setRightNode = (e) => {
//     this.setState({ rightNode: e.target.value });
//   };
//   setEdgeWeight = (e) => {
//     this.setState({ edgeWeight: e.target.value });
//   };
//   render() {
//     return (
//       <div className="w-full items-center flex flex-row">
//         <IconButton onClick={() => this.props.deleteEdge()}>
//           <HighlightOffRounded color="primary" size="medium" />
//         </IconButton>
//         <Paper
//           className="flex relative flex-row items-center flex-1 py-3 my-2 px-4 justify-around"
//           elevation={3}
//         >
//           <Input
//             type="text"
//             placeholder="Node"
//             value={this.leftNode}
//             onChange={this.setLeftNode}
//             variant="contained"
//             className="w-[70px]"
//           />
//           <hr className="h-px flex-1 mx-2" />
//           <TextField
//             type="number"
//             placeholder="Weight"
//             className="w-[120px]"
//             value={this.edgeWeight}
//             onChange={this.setEdgeWeight}
//           />
//           <hr className="h-px flex-1 mx-2" />
//           <Input
//             type="text"
//             placeholder="Node"
//             value={this.rightNode}
//             onChange={this.setRightNode}
//             variant="outlined"
//             className="w-[70px] text-center"
//           />
//         </Paper>
//       </div>
//     );
//   }
// }

export default EdgeCard;
