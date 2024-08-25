import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../css/car-table.css";
import { addToHighlighted, removeFromHighlighted } from "../utils/localStorageUtils"; // Import the remove function

const CarTable = ({ carData }) => {
  const [highlightedCars, setHighlightedCars] = useState([]);

  useEffect(() => {
    // Fetch highlighted cars from local storage
    const cars = JSON.parse(localStorage.getItem("highlightedCars")) || [];
    setHighlightedCars(cars);
  }, []);

  const isHighlighted = (carId) => {
    return highlightedCars.some((car) => car.Cid === carId);
  };

  const handleIconClick = (car) => {
    const carId = car.Cid;
    if (isHighlighted(carId)) {
      removeFromHighlighted(carId);
    } else {
      addToHighlighted(car);
    }
    const cars = JSON.parse(localStorage.getItem("highlightedCars")) || [];
    setHighlightedCars(cars);
  };

  return (
    <div className="container mt-4">
      <div className="accordion" id="carAccordion">
        {Object.keys(carData).map((mkID, index) => (
          <div key={mkID} className="accordion-item">
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded="false"
                aria-controls={`collapse-${index}`}
                style={{ backgroundColor: "transparent" }} // Remove default background
              >
                {carData[mkID].icon && (
                  <img
                    src={carData[mkID].icon}
                    alt={carData[mkID].brandName}
                    className="me-2"
                    style={{ width: "24px", height: "24px" }}
                  />
                )}
                {carData[mkID].brandName}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#carAccordion"
            >
              <div className="accordion-body">
                <table className="table table-striped table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>#</th>
                      <th>Model</th>
                      <th>Price</th>
                      <th>Year</th>
                      <th>Province</th>
                      <th className="text-center">Image</th>
                      <th className="text-center">Highlight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carData[mkID].cars.map((car, i) => (
                      <tr key={car.Cid}>
                        <td>{i + 1}</td>
                        <td>{car.Model}</td>
                        <td>{car.Prc}</td>
                        <td>{car.Yr}</td>
                        <td>{car.Province}</td>
                        <td className="text-center">
                          <img
                            src={car.Img100}
                            alt={car.Model}
                            className="img-thumbnail"
                            width="100"
                          />
                        </td>
                        <td className="text-center">
                          <FontAwesomeIcon
                            icon={faStar}
                            className={`bookmark-icon ${
                              isHighlighted(car.Cid) ? "highlighted" : ""
                            }`}
                            onClick={() => handleIconClick(car)}
                            style={{ cursor: "pointer" }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarTable;
