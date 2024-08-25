import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { pieChartData } from "../utils/pieChartData"; // Import the prepared pie chart data
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Register Chart.js components needed for Pie Chart
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Pie chart data
  const data = pieChartData;

  // Pie chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // We'll handle the legend manually
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="container">
      <h2>Car Brand Distribution</h2>
      <div className="row align-items-center">
        {/* Pie Chart on the left */}
        <div className="col-md-6">
          <div style={{ height: "450px" }}>
            <Pie data={data} options={options} />
          </div>
        </div>

        {/* Legends on the right */}
        <div className="col-md-6">
          <ul className="list-unstyled d-flex flex-wrap">
            {data.labels.map((label, index) => (
              <li
                key={index}
                className="d-flex align-items-center mb-2"
                style={{ width: "50%", fontSize: "0.7rem" }} // 50% width for two columns and smaller font size
              >
                <span
                  className="legend-circle"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                ></span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
