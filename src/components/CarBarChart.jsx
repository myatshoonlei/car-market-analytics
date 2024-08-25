import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { chartData } from "../utils/barChartData"; // Import the prepared chart data
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Register Chart.js components needed for Stacked Bar Chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = () => {
  // Chart data
  const data = {
    labels: chartData.labels,
    datasets: chartData.datasets,
  };

  // Chart options
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    maintainAspectRatio: false, // Allow custom height
  };

  return (
    <div className="container">
      <h2 className="text-start">Car Models by Brand</h2>
      <div className="chart-container" style={{ height: "450px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default StackedBarChart;
