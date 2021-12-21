import images from "constants/images";
import Image from "next/image";

const STICKERS = [
  {
    id: 1,
    number: 100,
    image: images.food,
    title: "Foods",
  },
  {
    id: 2,
    number: 100,
    image: images.likes,
    title: "Likes",
  },
  {
    id: 3,
    number: 100,
    image: images.chef,
    title: "Chefs",
  },
  {
    id: 4,
    number: 100,
    image: images.delivery,
    title: "Delivery",
  },
];

function ScrollStickers() {
  return (
    <div className="w-full py-2 my-3 sm:justify-between space-x-3 items-center flex flex-row">
      {STICKERS.map((sticker) => (
        <div
          key={sticker.id}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src={sticker.image}
            alt={sticker.title}
            width={100}
            height={100}
            objectFit="contain"
          />
          <h1>{sticker.number}</h1>
          <h1>{sticker.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default ScrollStickers;
