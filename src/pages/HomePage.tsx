import Featured from "../components/ui/homePage/Featured";
import HeroSection from "../components/ui/homePage/HeroSection";
import Review from "../components/ui/homePage/Review";
import ServiceAdvertisement from "../components/ui/homePage/ServiceAdvertisement";

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ServiceAdvertisement />
      <Featured />
      <Review />
    </div>
  );
};

export default HomePage;
