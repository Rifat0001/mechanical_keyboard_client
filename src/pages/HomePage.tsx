import Faq from "../components/ui/homePage/Faq";
import Featured from "../components/ui/homePage/Featured";
import HeroSection from "../components/ui/homePage/HeroSection";
import Offer from "../components/ui/homePage/Offer";
import Review from "../components/ui/homePage/Review";
import ServiceAdvertisement from "../components/ui/homePage/ServiceAdvertisement";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="p-4 px-4 sm:px-6 lg:px-8">
        <ServiceAdvertisement />
        <Featured />
        <Review />
      </div>
      <Offer />
      <div className="p-4 px-4 sm:px-6 lg:px-8">  <Faq /></div>

    </div>
  );
};

export default HomePage;
