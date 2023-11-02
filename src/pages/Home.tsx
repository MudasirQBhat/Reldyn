import TopSection from "../components/home-components/TopSection";
import Partners from "../components/home-components/Partners";
import Services from "../components/home-components/Services";
import ProductsPicture from "../components/home-components/ProductsPicture";
import Tabs from "../components/home-components/Tabs";
import Careers from "../components/home-components/Careers";

const Home = () => {
  return (
    <>
      <div className="bg-primary-background">
        <TopSection />
        <hr className="w-full px-20 mt-4 text-line-color" />
        <Partners />
      </div>
      <Services />
      <ProductsPicture />
      <Tabs />
      <Careers />
    </>
  );
};

export default Home;
