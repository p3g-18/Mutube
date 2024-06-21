import React from "react";
import Button from "./Button";

const buttList = [
  "All",
  "Gaming",
  "Cricket",
  "Football",
  "Live",
  "Tech",
  "SmartPhones",
  "India",
];

const ButtonList = () => {
  return (
    <div className="flex px-20">
      {buttList.map((label, index) => (
        <Button key={index} label={label} />
      ))}
    </div>
  );
};

export default ButtonList;
