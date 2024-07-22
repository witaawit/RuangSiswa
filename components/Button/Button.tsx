import Image from "next/image";
import { useRouter } from "next/router";

type ButtonProps = {
  content: string;
  className?: string;
  classNameImg?: string;
  onClick?: () => void;
  href?: string;
  img?: string;
  widt?: number;
};

function Button({
  content,
  className,
  classNameImg,
  onClick,
  href,
  img,
  widt,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick();
    }
    if (href) {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {content}{" "}
      {img && (
        <div className={classNameImg}>
          <Image src={img} alt={content} width={widt} height={widt} />
        </div>
      )}
    </button>
  );
}

export { Button };
