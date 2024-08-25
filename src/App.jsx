import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import HighlightedCarsPage from "./pages/HighlightedCarsPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/car-market-analytics/" element={<Dashboard />} />
        <Route
          path="/car-market-analytics/highlighted-cars"
          element={<HighlightedCarsPage />}
        />
        <Route
          path="*"
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
};

export default App;

