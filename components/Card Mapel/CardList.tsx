// import { Card } from "./Card";
// import type { CardProps } from "./Card";

// type CardListProps = {
//   cards: CardProps[];
// };

// function CardList ({cards}: CardListProps){
//   return (
//     <div className="grid grid-cols-4 gap-3">
//       {cards.map((card, index) => (
//         <Card key={index} {...card}/>
//       ))}
//     </div>
//   )
// }

// export {CardList};

import { useEffect, useState } from "react";
import { Card } from "./Card";
import type { CardProps } from "./Card";

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://sistech-server.vercel.app/api/data"
        );
        const data = await response.json();

        console.log("fetched data", data);

        if (data && Array.isArray(data.data)) {
          setCards(data.data);
        } else {
          console.error("wrong format", data);
        }
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export {CardList};
