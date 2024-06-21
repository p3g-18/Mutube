import React from "react";

const Button = ({ label }) => {
  return (
    <div className="m-2 px-6 py-2 text-lg font-semibold bg-gray-200 rounded-lg">
      <button>{label}</button>
    </div>
  );
};

export default Button;
