import Filter from "@/components/Filter";
import Header from "@/components/Header";
import RestoCard from "@/components/RestoCard";
import { restoData } from "./restoData";

interface IRestaurant {
  id: number;
  name: string;
  categories: string;
  price: string;
  isOpen: string;
}

export default async function Home() {
  // const [restoData, setrestoData] = useState<IRestaurant[]>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:4000/restaurants");
  //       const data = await response.json();
  //       setrestoData(data);
  //     } catch (error) {
  //       console.error("Error fetching tickets:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // console.log(restoData);

  return (
    <>
      <Header />
      <Filter />

      <div className="flex gap-2 flex-wrap">
        {restoData.map((resto) => (
          <RestoCard
            id={resto.id}
            key={resto.name}
            title={resto.name}
            categories={resto.categories}
            price={resto.price}
            isOpen={resto.isOpen}
          />
        ))}
      </div>
    </>
  );
}
