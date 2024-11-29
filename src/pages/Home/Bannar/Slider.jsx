// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../assets/Images//Slider/slider-1.jpg";
import slider2 from "../../../assets/Images//Slider/slider-2.jpg";
import slider3 from "../../../assets/Images//Slider/slider-3.jpg";
import slider4 from "../../../assets/Images//Slider/slider-4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Carousel from "./Carousel";

function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Carousel
            img={slider1}
            h1Text={"Welcome to Gourmet Bliss"}
            pText={
              "Delightful dining experience with flavors from around the world."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel
            img={slider2}
            h1Text={"Exquisite Cuisine"}
            pText={"Crafted with passion and perfection."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel
            img={slider3}
            h1Text={"Fresh Ingredients"}
            pText={"From farm to table, every dish tells a story."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel
            img={slider4}
            h1Text={"Book Your Table Today"}
            pText={"Reserve now for an unforgettable dining experience."}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
