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
          "https://e634eb7e-2231-4a92-9154-7be37a299bcc.mock.pstmn.io/mapel"
        );
        const data = await response.json();

        console.log("fetched data", data);

        if (Array.isArray(data)) {
          setCards(data);
          setLoading(false);
        } else {
          console.error("wrong format", data);
          setLoading(false);
        }
      } catch (error) {
        console.error("error fetching data", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="px-16 grid grid-cols-4 gap-y-12 pb-10">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export {CardList};
