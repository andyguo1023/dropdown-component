const DeselectAll = ({ onClick }) => {
    return (
        <li className="text-left p-2 hover:bg-gray-100 cursor-pointer" onClick={onClick}>
            Deselect All
        </li>
    );
};

export default DeselectAll;
