const SelectAll = ({ onClick }) => {
    return (
        <li className="text-left p-2 hover:bg-gray-100 cursor-pointer" onClick={onClick}>
            Select All
        </li>
    );
};

export default SelectAll;
