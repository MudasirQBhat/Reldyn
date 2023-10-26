import { Link } from "react-router-dom";

const BottomFooter = () => {
  return (
    <>
      <div className="flex flex-col justify-start py-4 px-4 bg-bottom-footer-background lg:py-8 lg:px-20 lg:flex-row lg:justify-between gap-1">
        <div className="font-inter text-sm lg:text-lg text-color-white font-light">
          <p>&copy; 2023 Maxwell Inc. All rights reserved.</p>
        </div>
        <div className="flex flex-col text-sm lg:text-lg text-color-white font-light space-x-0 lg:flex-row lg:space-x-8 mt-4 lg:mt-0">
          <Link to="#" className="block lg:inline-block">
            Terms of Service
          </Link>
          <Link to="#" className="block lg:inline-block">
            Privacy Policy
          </Link>
          <Link to="#" className="block lg:inline-block">
            Cookies
          </Link>
        </div>
      </div>
    </>
  );
};

export default BottomFooter;
