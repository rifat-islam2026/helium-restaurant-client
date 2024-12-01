import { useLoaderData } from "react-router-dom";

function ViewDetails() {
  const food = useLoaderData();
  return (
    <div className="card bg-base-100 w-96 hover:bg-orange-50 rounded-none hover:shadow-xl mx-auto my-10 ">
      <figure>
        <img src={food.foodImage} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{food.foodName}</h2>
        <p>{food.foodCategory}</p>
        <p>
          <strong>$ {food.price}</strong>
        </p>
      </div>
    </div>
  );
}

export default ViewDetails;
