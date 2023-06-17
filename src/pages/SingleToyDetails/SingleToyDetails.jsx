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
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex flex-col gap-5">
          <p className="text-5xl font-bold">TOY: {name}</p>
          <p>SELLER: {seller}</p>
          <p>SELLERMAIL: {sellerMail}</p>
          <p>PRICE: {price}</p>
          <p>RATING: {rating}</p>
          <p>QUANTITY: {quantity}</p>
          <p>DESCRIPTION: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
