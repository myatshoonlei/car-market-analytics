import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icon for removal

const HighlightedCars = () => {
  const [highlightedCars, setHighlightedCars] = useState([]);

  useEffect(() => {
    // Fetch highlighted cars from local storage
    const cars = JSON.parse(localStorage.getItem("highlightedCars")) || [];
    setHighlightedCars(cars);
  }, []);

  const removeCar = (carId) => {
    // Remove the car with the specified carId from local storage
    const updatedCars = highlightedCars.filter((car) => car.Cid !== carId);
    localStorage.setItem("highlightedCars", JSON.stringify(updatedCars));
    setHighlightedCars(updatedCars);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {highlightedCars.length === 0 ? (
          <div className="col-12 text-center text-danger">
            <p className="mt-2">No highlighted cars found.</p>
          </div>
        ) : (
          highlightedCars.map((car) => (
            <div className="col-md-4 mb-4" key={car.Cid}>
              <div className="card">
                <img
                  src={car.Img300}
                  className="card-img-top"
                  alt={car.Model}
                  style={{ height: "200px", objectFit: "cover" }} // Set card image height and fit
                />
                <div className="card-body">
                  <h5 className="card-title">{car.Model}</h5>
                  <p className="card-text">
                    <strong>Price:</strong> {car.Prc} <br />
                    <strong>Year:</strong> {car.Yr} <br />
                    <strong>Province:</strong> {car.Province}
                  </p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeCar(car.Cid)}
                    style={{ position: "absolute", top: "10px", right: "10px" }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HighlightedCars;
