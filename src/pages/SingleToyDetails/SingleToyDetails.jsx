import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const SingleToyDetails = () => {
  const id = useParams().id;
  const [data, setData] = useState({});
  const {
    photo,
    name,
    seller,
    sellerMail,
    price,
    rating,
    quantity,
    description,
  } = data;
  console.log(id, data);
  useEffect(() => {
    fetch(`https://assignment-11-server-alpha-five.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);
  return (
    <div className="hero min-h-screen bg-base-200">
            <Helmet>
        <title>Details | Toy Kingdom</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={photo}
          className="w-48 md:w-80 rounded-lg shadow-2xl"
        />
        <div className="flex flex-col gap-5">
          <p className="text-5xl font-bold">{name}</p>
          <p><span className="font-bold">SELLER: </span>{seller}</p>
          <p><span className="font-bold">SELLERMAIL: </span>{sellerMail}</p>
          <p><span className="font-bold">PRICE: </span>{price}</p>
          <p><span className="font-bold">RATING: </span>{rating}</p>
          <p><span className="font-bold">QUANTITY: </span>{quantity}</p>
          <p><span className="font-bold">DESCRIPTION: </span>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
