import { useLoaderData } from "react-router-dom";
import Slider from "./Bannar/Slider";
import Foods from "./Food/Foods";

function Home() {
  const foods = useLoaderData();
  console.log(foods);
  return (
    <div>
      {/* banner */}
      <Slider />
      {/* food */}
      <Foods foods={foods} />
    </div>
  )
}

export default Home
