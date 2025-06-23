// Keys.jsx
import React from "react";

const Keys = ({ label, keyClass, onButtonClick}) => {
  // Determine background based on the label
  const bgClass = ["AC", "C", "%", "/", "*", "-", "+","/"].includes(label)
    ? "bg-[#6c6c3d]"
    : "bg-[#141414]";

  // Special class for equals
  const equalClass =
    "col-[span_2] bg-[#4ccdc6] text-[#1a261a] font-semibold hover:bg-[#4CCDC6]";

  return (
    <div
      className={`
        ${bgClass}
        flex cursor-pointer items-center justify-center p-4 rounded-[5px]
        hover:bg-[#4ccdc742]
        ${keyClass === "equals" ? equalClass : ""}
      `}
      onClick={()=>onButtonClick(label)}
    >
      {label}
    </div>
  );
};

export default Keys;
