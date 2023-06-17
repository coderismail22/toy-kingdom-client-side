import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ToyCard from "../../componentChunks/ToyCard/ToyCard";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const email = user?.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://assignment-11-server-alpha-five.vercel.app/addatoy?email=${email}`
        );
        const jsonData = await response.json();
        setDatas(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]);

  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }

  if (datas.length === 0) {
    return <div className="text-5xl text-center">Nothing to show here !</div>;
  }

  // DELETE A TOY

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-alpha-five.vercel.app/toy/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = datas.filter((data) => data._id !== id);
              setDatas(remaining);
            }
          });
      }
    });
  };
  

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Helmet>
        <title>My Toys | Toy Kingdom</title>
      </Helmet>
      {datas.map((data) => (
        <ToyCard
          key={data._id}
          item={data}
          handleDelete={handleDelete}
          showDeleteButton={true}
        ></ToyCard>
      ))}
    </div>
  );
};

export default MyToys;
