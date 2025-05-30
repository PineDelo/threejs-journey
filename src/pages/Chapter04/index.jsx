import { Routes, Route } from "react-router-dom";

const Chapter04 = () => {
  return (
    <div>
      <h1>Chapter 04</h1>
      <Routes>
        <Route path="/" element={<div>Chapter 04 Home</div>} />
        {/* Add more routes for Chapter 04 here */}
      </Routes>
    </div>
  );
};

export default Chapter04;
