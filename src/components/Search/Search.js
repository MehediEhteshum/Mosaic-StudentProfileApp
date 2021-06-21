import React from 'react';

import './Search.css';

const Search = () => {
    function onFocusNameSearch(inputId) {
        // highlighting the search input area
        document.getElementById(inputId).style.outline = "none";
        document.getElementById(inputId).style.borderBottom = "1.5px solid";
    }

    function onBlurNameSearch(inputId) {
        // un-highlighting the search input area
        document.getElementById(inputId).style.outline = "none";
        document.getElementById(inputId).style.borderBottom = "1px solid";
    }

    function onChangeNameSearch(e) {
        let searchStr = e.target.value;
        console.log(searchStr);
    }

    return (
        <div className="row d-flex justify-content-center mt-4">
            <div className="col-auto mx-5 mb-2">
                <input className="search-input" id="search-name" type="text" placeholder="Search by name" onFocus={(e) => onFocusNameSearch(e.target.id)} onBlur={(e) => onBlurNameSearch(e.target.id)} onChange={(e) => onChangeNameSearch(e)} />
            </div>
            <div className="col-auto mx-5 mb-2">
                <input className="search-input" id="search-tag" type="text" placeholder="Search by tag" onFocus={(e) => onFocusNameSearch(e.target.id)} onBlur={(e) => onBlurNameSearch(e.target.id)} />
            </div>
        </div>
    );
};

export default Search;