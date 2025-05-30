import { Routes, Route } from "react-router-dom";

const Chapter05 = () => {
  return (
    <div>
      <h1>Chapter 05</h1>
      <Routes>
        <Route path="/" element={<div>Chapter 05 Home</div>} />
        {/* Add more routes for Chapter 05 here */}
      </Routes>
    </div>
  );
};

export default Chapter05;
