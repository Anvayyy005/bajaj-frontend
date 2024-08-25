import React from "react";

function Dropdown({options, onSelect}){
    return(
        <select onChange={(e) => onSelect(e.target.value)}>{options.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}</select>
    );
}
export default Dropdown;