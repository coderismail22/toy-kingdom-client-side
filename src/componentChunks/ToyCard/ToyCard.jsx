import { Link } from "react-router-dom";

const ToyCard = ({ item, handleDelete, showDeleteButton }) => {
  // console.log(item)
  const { _id, name, photo, price, rating } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="toyImage" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <div className="flex justify-start gap-5">
          <Link to={`/toy/${_id}`} className="card-actions justify-center">
            <button className="btn btn-primary ">View Details</button>
          </Link>
          <div>
            {showDeleteButton && (
              <button
                className="btn btn-circle btn-outline"
                onClick={() => handleDelete(_id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
