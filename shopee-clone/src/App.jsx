import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/main.scss";  
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));

const App = () => {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Các route khác */}
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default App;
