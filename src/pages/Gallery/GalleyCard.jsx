import Fade from "react-awesome-reveal";

function GalleyCard({ aGallery }) {
  return (
    <div className="relative group text-white overflow-hidden rounded-md text-center">
      <img
        className="h-[199px] w-full"
        src={aGallery.imageUrl}
        alt="Gallery Images"
      />

      <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
        <div className="flex flex-col items-center">
          <Fade direction="right">
            <h2 className="text-2xl font-bold mb-2 hover:text-orange-500 duration-300">
              {aGallery.userName}
            </h2>
            <p className="hover:text-orange-500 duration-300">{aGallery.feedback}</p>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default GalleyCard;
