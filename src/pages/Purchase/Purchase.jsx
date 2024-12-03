import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function Purchase() {
    const { user } = useAuth()
    const [startDate, setStartDate] = useState(new Date());
  const food = useLoaderData()
  const handelPurchase = e => {
    e.preventDefault()
    const form = e.target;
    const foodName = form.foodName.value;
    const price = parseInt(form.price.value);
    const quantity = form.quantity.value;
    const buyingDate = new Date(startDate).toLocaleDateString();
    const email = user?.email;

    const purchaseData = { foodName, price, quantity, buyingDate, email }
    console.table(purchaseData)
  }
  return (
    <div className="my-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Helium | Purchase</title>
      </Helmet>
      <div className="card bg-base-100 w-4/5  mx-auto shrink-0 shadow-2xl">
        <img className="w-1/3 mx-auto mt-3 rounded" src={food.foodImage} />
        <form onSubmit={handelPurchase} className="card-body">
          <div className="flex gap-3">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                name="foodName"
                type="text"
                placeholder="Food Name"
                defaultValue={food?.foodName}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                type="number"
                placeholder="Price"
                defaultValue={food?.price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                name="quantity"
                type="number"
                placeholder="Quantity"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Buying Date</span>
              </label>
              <DatePicker
                className="input input-bordered w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Buyer Name</span>
              </label>
              <input
                defaultValue={`${user?.displayName}`}
                className="input input-bordered"
                disabled
              />
            </div>

            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Buyer Email</span>
              </label>
              <input
                defaultValue={`${user?.email}`}
                className="input input-bordered "
                disabled
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Purchase
