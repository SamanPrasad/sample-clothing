import CategoriesHomeList from "../components/Categories/CategoriesHomeList";
import Slider from "../components/Slider/Slider";

function Home() {
  return (
    <div className="w-full">
      <Slider />
      <CategoriesHomeList />
    </div>
  );
}

export default Home;
