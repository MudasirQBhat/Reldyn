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
        <hr className="w-[85%] mx-auto mt-4 text-line-color" />
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
