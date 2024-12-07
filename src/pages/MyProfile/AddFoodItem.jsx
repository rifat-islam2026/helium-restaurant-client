import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function AddFoodItem() {
   const { user } = useAuth();
   const food = useLoaderData();
   const handelFormSubmit = (e) => {
     e.preventDefault();
     const form = e.target;
     const foodName = form.foodName.value;
     const foodCategory = form.category.value;
     const foodImage = form.foodImage.value;
     const quantity = form.quantity.value;
     const price = parseInt(form.price.value);
     const origin = form.origin.value;
     const description = form.description.value;
     const email = user?.email;

     const foodData = {
       foodName,
       foodCategory,
       foodImage,
       quantity,
       price,
       origin,
       description,
       email,
     };
     console.table(foodData)
     axios
       .post(`${import.meta.env.VITE_API_URL}/foods`, foodData)
       .then((res) => {
         console.log(res.data);
         if (res.data.insertedId) {
           return toast.success("Adding a food item");
         }
         e.target.reset();
       })
       .catch((err) => {
         console.log(err);
       });
   };
  return (
    <div className="mt-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Helium | AddFoodItem</title>
      </Helmet>
      <div className="card bg-base-100 w-4/5  mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handelFormSubmit} className="card-body">
          <div className="flex gap-3">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                name="foodName"
                type="text"
                placeholder="Food Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Food Category</span>
              </label>
              <select name="category" className="select select-bordered">
                <option disabled selected>
                  Selected Food Category?
                </option>
                <option value="Cheeseburger">Cheese burger</option>
                <option value="ItalianPasta">Italian Pasta</option>
                <option value="Margherita Pizza">Margherita Pizza</option>
              </select>
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Food Image URL</span>
            </label>
            <input
              name="foodImage"
              type="text"
              placeholder="Food Image URL"
              className="input input-bordered"
              required
            />
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
                defaultValue='0'
                disabled
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
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Food Origin</span>
              </label>
              <select name="origin" className="select select-bordered">
                <option disabled selected>
                  Selected Food Origin?
                </option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Italy">Italy</option>
                <option value="America">America</option>
              </select>
            </div>

            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                name="description"
                type="text"
                placeholder="Description"
                className="input input-bordered"
                required
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
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFoodItem