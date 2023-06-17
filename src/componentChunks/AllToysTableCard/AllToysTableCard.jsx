import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const AllToysTableCard = ({item}) => {
    const {user} = useContext(AuthContext)
    console.log(item)
    const {name,photo,seller,subCategory,price,quantity,_id} = item;
  return (
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{seller}</td>
        <td>{price}</td>
        <td>Sub Category Here</td>
        <td>{quantity}</td>
        <th>
          <Link to={user?`/toy/${_id}`:'/login'} className="btn btn-ghost btn-xs">Details</Link>

        </th>
      </tr>
  );
};

export default AllToysTableCard;
