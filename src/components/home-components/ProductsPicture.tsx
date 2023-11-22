import productsImage from "../../assets/ProductsImage.png";

const ProductsPicture = () => {
  return (
    <>
      <div
        className="w-full h-[95vh] bg-cover bg-center relative object-cover"
        style={{
          backgroundImage: `url(${productsImage})`,
        }}
      >
        <div className="w-full px-6 md:px-20 mx-auto pt-24 text-left md:text-left">
          <div>
            <p className="text-white text-xl font-semibold font-roboto tracking-widest border-b-4 border-primary-color w-24 pb-4">
              PRODUCTS
            </p>
          </div>

          <div data-aos="slide-right" className="mt-4">
            <p className="font-light text-color-white text-4xl md:text-6xl lg:text-8xl">
              Solutions that
            </p>
            <p className="font-bold text-color-white text-4xl md:text-6xl lg:text-8xl">
              changed
            </p>
            <p className="font-bold text-primary-color text-4xl md:text-6xl lg:text-8xl">
              industries
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPicture;
