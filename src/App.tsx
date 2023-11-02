import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./index.css";
import RouterComponent from "./react-router/RouterComponent";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomFooter from "./components/BottomFooter";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: "ease", // Easing function for the animation (e.g., 'ease', 'ease-in-out', 'linear')
      offset: 200, // Offset (in pixels) from the trigger point before the animation starts
      delay: 0, // Delay (in milliseconds) before the animation starts
      anchorPlacement: "top-bottom", // Position of the anchor element for the animation
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <RouterComponent />
        <div>
          <Footer />
          <BottomFooter />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
