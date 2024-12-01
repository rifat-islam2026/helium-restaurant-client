import { useState } from "react";
import { Link } from "react-router-dom";
import FoodCard from "./FoodCard";

function Foods({ foods }) {
  const [foodLength, setFoodLength] = useState(6);

  return (
    <div className="pt-10">
      <h1 className="text-5xl font-bold py-10 text-center">
        Explore the Best of Our Menu
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mx-auto p-0 md:px-5 sm:px-5">
        {foods?.slice(0, foodLength).map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      <div className="text-center">
        <button className="text-xl w-32 h-12 my-7 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
          <span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
          <span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
          <Link to="all-foods">See All</Link>
        </button>
      </div>
    </div>
  );
}

export default Foods;
