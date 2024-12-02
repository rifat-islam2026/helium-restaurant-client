import { Link } from "react-router-dom";

function FoodCard({ food }) {
  const { foodName, foodCategory, foodImage, price } = food;
  return (
    <div
      data-aos="zoom-in"
      className="card bg-base-100 w-96 hover:shadow-xl rounded-none hover:bg-orange-50"
    >
      <figure>
        <img src={foodImage} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Food Name: {foodName}</h2>
        <p>Food Category: {foodCategory}</p>
        <p>
          <strong>Price: $ {price}</strong>
        </p>
        <div className="card-actions justify-end">
          <Link to={`/viewDetails/${food._id}`}>
            <button className="group relative flex w-36 items-center rounded-lg border-2 border-sky-400 p-3 text-sky-300">
              View Details
              <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
