import { Paper, CardActionArea } from "@mui/material";
import Image from "next/image";
import images from "constants/images";
import Link from "next/link";

function GraphCard({ graph }) {
  return (
    <Link href={graph.link} passHref>
      <CardActionArea>
        <Paper
          elevation={3}
          className="w-full space-y-4 items-center p-4 flex flex-col"
        >
          <Image
            src={images[graph.image]}
            width={200}
            height={200}
            objectFit="cover"
            alt={graph.title}
          />
          <h1 className="text-xl font-semibold text-center">{graph.title}</h1>
        </Paper>
      </CardActionArea>
    </Link>
  );
}

export default GraphCard;
