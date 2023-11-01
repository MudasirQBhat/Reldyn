import React, { useEffect, useState } from "react";

const MapComponent = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9113388784244!2d101.67450312477649!3d3.118153353342816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc498e513bd64b%3A0x6c46e140f090d7b9!2sMid%20Valley%20City%2C%2058000%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sin!4v1697535370117!5m2!1sen!2sin"
      width="100%"
      height="100%"
      // height={mapHeight}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-bl-3xl rounded-br-3xl lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-bl-none"
    ></iframe>
  );
};

export default MapComponent;
