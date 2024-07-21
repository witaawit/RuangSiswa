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
    <div>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <hr />
        <ul>
          {lists.map((list, index) => (
            <li key={index}>
              <Image src={image} alt="Check Mark" width={10} height={10} />
              {list}
            </li>
          ))}
        </ul>
        <hr />
      </div>
      <div>
          <h2>{price}</h2>
          <Button content="Beli Paket" className="" />
      </div>
    </div>
  );
}

export type { CardProps };
export { Card };
