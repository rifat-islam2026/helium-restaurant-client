import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import foodBanner from "../../../src/assets/Images/food-banner.jpg";
import FoodCard from "../Home/Food/FoodCard";

function AllFoods() {
  const [foods, setFoods] = useState([]);
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // get all foods
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/all-foods?page=${currentPage}&size=${itemsPerPage}&filter=${filter}`
      );
      setFoods(data);
    };
    getData();
  }, [currentPage, itemsPerPage,filter]);
  // get foods count
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/foods-count?filter=${filter}`
      );
      setCount(data.count);
    };
    getCount();
  }, [filter]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);
  // handel pagination button
  const handelPaginationButton = (val) => {
    setCurrentPage(val);
    console.log(val);
    };
  // handel reset button
  const handelResetButton = () => {
    setFilter('')
    };
    
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

      <div className="flex items-center gap-5">
        {/* Filter field */}
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">Filter By Category?</option>
          <option value="Cheeseburger">Cheese burger</option>
          <option value="ItalianPasta">Italian Pasta</option>
          <option value="Margherita Pizza">Margherita Pizza</option>
        </select>
        {/* Search field */}
        <div className="form-control my-10 w-1/3 relative">
          <input
            type="text"
            placeholder="Search Foods"
            className="input input-bordered w-24 md:w-auto"
          />
          <button className="btn btn-info absolute right-0">Send</button>
              </div>
              {/* Reset Button */}
              <button onClick={handelResetButton} className="btn btn-error">
                  Reset
              </button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {foods?.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>

      {/* Pagination section */}
      <div className="flex justify-center mt-12">
        {/* Previous button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handelPaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 capitalize text-gray-700 transition-colors duration-300 transform bg-base-200 hover:bg-blue-500 hover:text-white rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-600"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>
        {pages.map((page) => (
          <button
            onClick={() => handelPaginationButton(page)}
            key={page}
            className={`hidden ${
              currentPage === page ? "bg-blue-500 text-white" : ""
            } px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`}
          >
            {page}
          </button>
        ))}
        {/* Next button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handelPaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-base-200 rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-600 "
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default AllFoods;
