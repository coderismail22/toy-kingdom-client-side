import { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";

const ToyCardSection = ({ category }) => {
  // console.log(category)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-11-server-alpha-five.vercel.app/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [category]);
  if (loading) {
    return <span className="loading loading-spinner text-primary flex flex-col items-center"></span>;
  }
  return <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 p-5 place-items-center">{data.map((item) => <ToyCard key={item._id} item={item}></ToyCard>)}</div>
};

export default ToyCardSection;
