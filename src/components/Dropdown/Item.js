import React from 'react'

const Item = ({ option, multiSelect, selectedOptions, handleOptionClick, valueField, labelField }) => {
  return (
    <li
              className={`text-left p-2 ${
                selectedOptions.includes(option[valueField || labelField])
                  ? "bg-gray-200"
                  : ""
              } hover:bg-gray-100 cursor-pointer`}
              onClick={() => handleOptionClick(option)}
              value={option[valueField || labelField]}
            >
              {multiSelect && (
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedOptions.some(selectedOption => selectedOption[valueField] === option[valueField])}
                  onChange={() => {}}
                />
              )}
              {option[labelField]}
            </li>
  )
}

export default Item;