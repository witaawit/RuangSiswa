// import Image from "next/image";
// import { Button } from "../Button";
// import { useEffect, useState } from "react";

// type CardProps = {
//   img: string;
//   title: string;
//   onClick?: () => void;
// };

// const Card: React.FC = () => {
//   const [Card, setCard] = useState<CardProps[]>([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch(
//           "https://e634eb7e-2231-4a92-9154-7be37a299bcc.mock.pstmn.io/mapel"
//         );
//         const data = await response.json();

//         console.log("fetched data", data);

//         if (data && Array.isArray(data.data)) {
//           setCard(data.data);
//         } else {
//           console.error("wrong format", data);
//         }
//       } catch (error) {
//         console.error("error fetching data", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div>
//       {Card.length === 0 ? (
//         <p>Loading courses...</p>
//       ) : (
//         <div className="grid grid-cols-4 gap-5">
//           {Card.map((cards) => (
//             <div onClick={cards.onClick} className="flex flex-col items-center justify-center gap-2">
//             <div className="bg-white px-6 py-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
//               <Image src={cards.img} alt={cards.title} width={35} height={23} />
//             </div>
//             <h3 className="font-semibold text-lg">{cards.title}</h3>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// {/* // function Card({ img, title, onClick }: CardProps) {
// //   return (
//     // <div onClick={onClick} className="flex flex-col items-center justify-center gap-2">
//     //   <div className="bg-white px-6 py-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
//     //     <Image src={img} alt={title} width={35} height={23} />
//     //   </div>
//     //   <h3 className="font-semibold text-lg">{title}</h3>
// //     </div>

// //   );
// // } */}

// export type { CardProps };
// export { Card };

import Image from "next/image";

type CardProps = {
  img: string;
  title: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ img, title, onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-col items-center justify-center gap-2">
      <div className="bg-white px-6 py-3 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <Image src={img} alt={title} width={35} height={23} />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
};

export type { CardProps };
export { Card };
