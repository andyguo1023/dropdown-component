import React, { useState, useRef } from "react";
import DeselectAll from "./DeselectAll";
import SelectAll from "./SelectAll";
import useOutsideClick from "../../hooks/useOutsideClick";
import SelectedOption from "./SelectedOption";
import Divider from "./Divider";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import Item from "./Item";

const Dropdown = ({
  dropdownName,
  data,
  labelField,
  valueField,
  multiSelect = false,
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(dropdownRef, () => {
    //console.log("Clicked outside!");
    setIsOpen(false);
  });

  const handleOptionClick = (option) => {
    //console.log("Clicked option:", option);

    if (multiSelect) {
      // Check if option already exists in selectedOptions
      const optionExists = selectedOptions.some((selectedOption) => {
        //console.log("Comparing:", selectedOption[valueField], option[valueField]);
        return selectedOption[valueField] === option[valueField];
      });

      //console.log("Option exists:", optionExists);

      if (optionExists) {
        // Remove the option
        setSelectedOptions((prevOptions) =>
          prevOptions.filter(
            (selectedOption) =>
              selectedOption[valueField] !== option[valueField]
          )
        );
      } else {
        // Add the new option
        setSelectedOptions((prevOptions) => [...prevOptions, option]);
      }
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
    }
  };

  const handleDeselect = (optionToRemove) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter(
        (option) => option[valueField] !== optionToRemove[valueField]
      )
    );
  };

  const handleSelectAll = () => {
    //console.log("selected all")
    setSelectedOptions(data.map((option) => option));
    //console.log(selectedOptions);
  };

  const handleDeselectAll = () => {
    //console.log("deelected all")
    setSelectedOptions([]);
  };

  Dropdown.Divider = Divider;
  Dropdown.Item = Item;


  return (
    <div className="relative inline-block mt-10" ref={dropdownRef}>
      <p className="absolute top-2 left-1/4 transform -translate-x-10 -translate-y-full bg-white px-2 text-xs text-blue-500">
        {dropdownName}
      </p>
      <button
        className="border-2 border-blue-400 text-black py-2 px-4 rounded w-56"
        onClick={toggleDropdown}
      >
        {selectedOptions.length > 0 ? (
          <SelectedOption
            options={selectedOptions}
            multiSelect={multiSelect}
            labelField={labelField}
            valueField={valueField}
            onClick={handleDeselect}
            className="px-1"
          />
        ) : (
          "Please select"
        )}
        <ArrowIcon isOpen={isOpen} className="absolute right-0 top-3.5 mr-2"/>
      </button>
      {isOpen && (
        <ul className="absolute left-0 max-h-48 overflow-y-auto mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg">
          {multiSelect && <SelectAll onClick={handleSelectAll} />}
          <DeselectAll onClick={handleDeselectAll} />
          <Dropdown.Divider/>
          
          {data.map((option, index) => (
            <Dropdown.Item 
            key={index}
            option={option} 
            multiSelect={multiSelect} 
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
            valueField={valueField}
            labelField={labelField}
          />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
