import codeEsiData from "@as/data/codeesi.json";
import { IconButton, Button } from "@mui/material";
import Link from "next/link";
import { Brightness7, Brightness4 } from "@mui/icons-material";
import Image from "next/image";
import { AppContext } from "context/AppContext";
import { useContext } from "react";
import images from "constants/images";

function Header() {
  const [isDark, handleChangeMode] = useContext(AppContext);
  return (
    <header className="w-full relative flex flex-col">
      <div className="w-full justify-between relative flex flex-row py-3">
        <Link href="/about" passHref>
          <Button className="z-10">About</Button>
        </Link>
        <div className="flex absolute top-0 left-0 w-full h-full flex-col justify-center items-center">
          <Link href="/" passHref>
            <h1 className="text-2xl cursor-pointer font-semibold ">
              Jina Graph Theory
            </h1>
          </Link>
        </div>
        <IconButton onClick={handleChangeMode}>
          {isDark ? (
            <Brightness7 color="primary" />
          ) : (
            <Brightness4 color="primary" />
          )}
        </IconButton>
      </div>
      <hr className="h-px bg-gray-400 opacity-90 w-full" />
      <div className="w-full justify-end items-center flex flex-row py-2">
        <div className="flex justify-center flex-row space-x-2">
          <IconButton href={codeEsiData.link} target="_blank">
            <Image
              objectFit="contain"
              src={images[codeEsiData.image]}
              width={45}
              height={45}
              alt="codeESI"
            />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
