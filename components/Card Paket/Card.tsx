import Image from "next/image";
import { Button } from "../Button";

type CardProps = {
  image: string;
  title: string;
  desc: string;
  lists: string[];
  price: string;
  onClick?: () => void;
};

function Card({ image, title, desc, lists, price, onClick }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-6 w-88 bg-white px-8 py-6 rounded-2xl shadow-[0_1px_5px_rgb(0,0,0,0.2)]">
      <div className="flex flex-col items-start gap-5">
        <h1 className="bg-yellow font-bold text-base py-2 px-3 rounded-3xl">{title}</h1>
        <p className="text-sm text-gray-700">{desc}</p>
        <hr className="border-gray-400 border-1/2 w-full" />
        <ul>
          {lists.map((list, index) => (
            <li className="flex gap-3 text-sm font-normal" key={index}>
              <Image src={image} alt="Check Mark" width={10} height={10} />
              {list}
            </li>
          ))}
        </ul>
        <hr className="border-gray-400 border-1/2 w-full" />
      </div>
      <div className="flex flex-col gap-4 items-center">
          <h2 className="font-bold text-3xl">{price}</h2>
          <Button content="Beli Paket" className="bg-gray-800 rounded-3xl text-white px-24 py-2" />
      </div>
    </div>
  );
}

export type { CardProps };
export { Card };
