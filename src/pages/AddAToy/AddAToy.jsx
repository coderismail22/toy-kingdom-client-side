import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const seller = form.seller.value;
    const sellerMail = form.sellermail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const email = user?.email;
    const subCategory = form.subcategory.value.toLowerCase();

    const newToy = {
      photo,
      name,
      seller,
      sellerMail,
      price,
      rating,
      quantity,
      description,
      email,
      subCategory
    };

    console.log(newToy);

    fetch("https://assignment-11-server-alpha-five.vercel.app/addatoy", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newToy),
      
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: name + " " + "added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
            <Helmet>
        <title>Add A Toy | Toy Kingdom</title>
      </Helmet>
      <h2 className="text-center text-3xl font-bold my-2 underline">
        ADD YOUR OWN TOY{" "}
      </h2>
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              required
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <select name="subcategory" className="select select-bordered">
              <option value="">Select</option>
              <option value="engineeringtoys">Engineering Toys</option>
              <option value="mathtoys">Math Toys</option>
              <option value="sciencetoys">Science Toys</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              required
              type="text"
              placeholder="Photo"
              name="photo"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller</span>
            </label>
            <input
              required
              type="text"
              name="seller"
              placeholder="Seller"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Mail</span>
            </label>
            <input
              required
              type="text"
              readOnly
              name="sellermail"
              defaultValue={user?.email}
              placeholder="Seller Mail"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              required
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              required
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              required
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              required
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Post"
          />
        </div>
      </form>
      <div className="card-body"></div>
    </div>
  );
};

export default AddAToy;
