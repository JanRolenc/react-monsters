import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, searchfieldChange }) => {
    return (
        <div className="searchbox" >
            <input
                type="search"
                placeholder={placeholder}
                onChange={searchfieldChange}
            />
        </div>

    );
}

export default SearchBox;