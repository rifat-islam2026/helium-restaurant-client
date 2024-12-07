import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import foodBanner from "../../../assets/Images/food-banner.jpg";
import FoodCard from "./FoodCard";

function AllFoods() {
    const foods = useLoaderData()

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Helium | All Foods</title>
      </Helmet>
      <div
        className="hero min-h-[300px] mb-10"
        style={{
          backgroundImage: `url(${foodBanner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">All Foods</h1>
            <button className="btn btn-sm btn-info rounded-none link-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <Link to="/">Go back</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="form-control my-10 w-1/2 relative">
        <input
          type="text"
          placeholder="Search Foods"
          className="input input-bordered w-24 md:w-auto"
        />
        <button className="btn btn-info absolute right-0">Send</button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {foods?.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default AllFoods
