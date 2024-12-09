import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { RiDeleteBin5Line } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth";

function MyOrderedFoodItem() {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  console.log(foods);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/purchase/${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setFoods(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // handel delete
  const handelDelete = (id) => {
    axios.delete(`${import.meta.env.VITE_API_URL}/delete/${id}`);
    const remaining = foods.filter((f) => f._id !== id);
    setFoods(remaining);
  };
  return (
    <div className="mt-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Helium | MyOrderedFoodItems</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Buying Date</th>
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
                    </div>
                  </div>
                </td>
                <td>
                  <strong>$</strong>
                  {food.price}
                </td>
                <td>{food.buyingDate}</td>
                <th>
                  <button
                    onClick={() => handelDelete(food._id)}
                    className="hover:text-red-500 transition-all duration-300 text-2xl"
                  >
                    <RiDeleteBin5Line />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyOrderedFoodItem;
