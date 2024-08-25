import React from "react";
import HighlightedCars from "../components/HighlightedCars";
import "bootstrap/dist/css/bootstrap.min.css";

const HighlightedCarsPage = ({ carData }) => {
  return (
    <div className="container">
      <h1 className="display-3 mt-5 text-center w-100 mt-3">
        Highlighted Cars
      </h1>
      <hr />
      <HighlightedCars carData={carData} />
    </div>
  );
};

export default HighlightedCarsPage;
