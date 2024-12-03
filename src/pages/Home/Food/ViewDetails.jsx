import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

function ViewDetails() {
  const food = useLoaderData();
  return (
    <div className="card bg-base-100 w-96 hover:bg-orange-50 rounded-none hover:shadow-xl mx-auto my-10 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Helium | View Details</title>
      </Helmet>
      <figure>
        <img src={food.foodImage} />
      </figure>
      <div>
        <div className="p-5">
          <h2 className="card-title">Food Name: {food.foodName}</h2>
          <p>Food Category: {food.foodCategory}</p>
          <p className="font-semibold">Quantity: 0</p>
          <p>
            <strong>Price: $ {food.price}</strong>
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="text-xl w-full h-14 text-white bg-sky-500 hover:bg-sky-600 duration-300">
            <Link to={`/purchase/${food._id}`}>Purchase</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
