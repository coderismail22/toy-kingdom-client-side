import { useEffect, useState } from "react";
import AllToysTableCard from "../../componentChunks/AllToysTableCard/AllToysTableCard";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://assignment-11-server-alpha-five.vercel.app/alltoys");
        const jsonData = await response.json();
        setDatas(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!datas) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <title>All Toys | Toy Kingdom</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Sub Category</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <AllToysTableCard key={data._id} item={data}></AllToysTableCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
