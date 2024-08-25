import React from "react";
import CarTable from "../components/CarTable";
import CarPieChart from "../components/CarPieChart";
import CarBarChart from "../components/CarBarChart";
import { carData } from "../utils/data";
import { addToHighlighted } from "../utils/localStorageUtils"; // Import the utility function
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container mt-3 mb-3">
        <h1 className="display-3 text-center w-100 mt-3">Cars Analytics</h1>
        <hr />
        <div className="d-flex flex-wrap justify-content-between row">
          <div className="dashboard-section flex-fill p-3 col-6">
            <CarPieChart carData={carData} />
          </div>
          <div className="dashboard-section flex-fill p-3 col-6">
            <CarBarChart carData={carData} />
          </div>
        </div>
      </div>
      <div className="dashboard-sectiona">
        <h1 className="display-3 text-center w-100">Cars Display</h1>
        <hr />
        <CarTable carData={carData} onAddToHighlighted={addToHighlighted} />
      </div>
    </div>
  );
};

export default Dashboard;
