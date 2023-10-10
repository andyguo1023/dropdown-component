import React from "react";

const SelectedOption = ({ options, multiSelect, labelField, valueField, onClick }) => {
  return (
    <>
      {options.map((option, index) => (
        <span key={option[valueField]} className="bg-blue-100 mx-1 px-1 rounded-lg">
          {option[labelField]}
          {multiSelect && <span
            onClick={(e) => {
              onClick(option);
              e.stopPropagation();
            }}
            className="cursor-pointe  text-blue-500 hover:text-red-600 hover:font-bold ml-1.5"
          >
            x
          </span>}
          {index !== options.length - 1 && " "}
        </span>
      ))}
    </>
  );
};

export default SelectedOption;
