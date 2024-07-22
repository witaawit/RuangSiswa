import Image from "next/image";
import Link from "next/link";

type CardProps = {
  img: string;
  title: string;
  onClick?: string;
};

const Card: React.FC<CardProps> = ({ img, title, onClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2"
    >
      <Link href={onClick || ""}>
        <div className="bg-white cursor-pointer px-28 py-10 rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <Image src={img} alt={title} width={80} height={23} />
        </div>
      </Link>
      <h3 className="font-semibold text-xl text-gray-700">{title}</h3>
    </div>
  );
};

export type { CardProps };
export { Card };
