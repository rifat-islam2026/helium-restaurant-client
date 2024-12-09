import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

function MyAddedFoodItems() {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    axiosSecure
      .get(`/my-added-foods/${user?.email}`)
      .then((res) => {
        setFoods(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="mt-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Helium | MyAddedFoodItems</title>
      </Helmet>
      <h3 className="text-2xl font-bold">My foods: {foods.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {foods.map((food) => (
              <tr className="hover" key={food._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={food.foodImage} alt="Food Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{food.foodName}</div>
                      <div className="text-sm opacity-50">{food.origin}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <strong>$</strong>
                  {food.price}
                </td>
                <td title={food.description}>
                  {food.description.substring(0, 40)}...
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {food.foodCategory}
                  </span>
                </td>
                <th>
                  <Link to={`/update/${food._id}`}>
                    <button className="hover:text-green-500 transition-all duration-300 text-xl">
                      <FaRegEdit />
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyAddedFoodItems;
