import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { RiImageAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import foodBanner from "../../../src/assets/Images/food-banner.jpg";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import GalleyCard from "./GalleyCard";

function Gallery() {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const axiosSecure = useAxiosSecure();

  const {
    data: gallery = [],
    isError,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["gallery"],
  });

  const getData = async () => {
    const { data } = await axiosSecure.get(`/gallery`);
    return data;
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const imageUrl = form.photo.value;
    const feedback = form.feedback.value;
    // console.log(userName,photoUrl,feedback)
    const galleryData = { userName, feedback, imageUrl };
    axios
      .post(`${import.meta.env.VITE_API_URL}/gallery`, galleryData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          return toast.success("Photo Added Successful");
        }
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-5">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Helium | Gallery</title>
      </Helmet>
      <div
        className="hero min-h-[300px]"
        style={{
          backgroundImage: `url(${foodBanner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Galley</h1>
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

      <div className="mx-auto flex w-72 items-center justify-center">
        <div
          onClick={() => setOpenModal(false)}
          className={`fixed z-[100] flex items-center justify-center ${
            openModal ? "opacity-1 visible" : "invisible opacity-0"
          } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${
              openModal
                ? "opacity-1 translate-y-0 duration-300"
                : "-translate-y-20 opacity-0 duration-150"
            }`}
          >
            <form
              onSubmit={handelFormSubmit}
              className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
            >
              <svg
                onClick={() => setOpenModal(false)}
                className="mx-auto mr-0 w-10 cursor-pointer fill-black dark:fill-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
                </g>
              </svg>
              <h1 className="pb-8 text-4xl backdrop-blur-sm">
                Add to Gallery Photo
              </h1>
              <div className="space-y-5">
                <div className="relative w-max rounded-lg">
                  <input
                    name="name"
                    className="peer rounded-lg border border-sky-600 bg-transparent px-4 py-2 text-sky-600 focus:outline-none"
                    type="text"
                    defaultValue={user?.displayName}
                    placeholder=""
                    id="navigate_ui_input_33"
                  />
                  <label
                    className="absolute -top-2 left-2 rounded-md bg-sky-600 px-2 text-xs text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-sky-600 peer-focus:text-xs peer-focus:text-sky-100"
                    htmlFor="navigate_ui_input_33"
                  >
                    User Name
                  </label>
                </div>

                <div className="relative w-max rounded-lg">
                  <input
                    name="photo"
                    className="peer rounded-lg border border-sky-600 bg-transparent px-4 py-2 text-sky-600 focus:outline-none"
                    type="text"
                    placeholder=""
                    id="navigate_ui_input_33"
                  />
                  <label
                    className="absolute -top-2 left-2 rounded-md bg-sky-600 px-2 text-xs text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-sky-600 peer-focus:text-xs peer-focus:text-sky-100"
                    htmlFor="navigate_ui_input_33"
                  >
                    Photo Url
                  </label>
                </div>

                <div className="relative w-max rounded-lg">
                  <textarea
                    name="feedback"
                    className="peer rounded-lg border border-sky-600 bg-transparent px-4 py-2 text-sky-600 focus:outline-none w-full"
                    type="text"
                    placeholder=""
                    id="_message"
                  />
                  <label
                    className="absolute -top-2 left-2 rounded-md bg-sky-600 px-2 text-xs text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-sky-600 peer-focus:text-xs peer-focus:text-sky-100"
                    htmlFor="_message"
                  >
                    Feedback
                  </label>
                </div>
              </div>
              {/* button type will be submit for handling form submission*/}
              <button
                type="submit"
                className="relative py-2.5 px-5 rounded-lg mt-6 bg-white drop-shadow-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="my-10">
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center btn btn-info text-base font-bold"
        >
          Add Photo
          <span>
            <RiImageAddFill />
          </span>
        </button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-7">
        {gallery.map((aGallery) => (
          <GalleyCard key={aGallery._id} aGallery={aGallery} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
