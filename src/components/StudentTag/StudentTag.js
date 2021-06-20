import React, { useContext, useState } from 'react';

import { StudentContext } from '../StudentProvider/StudentProvider';
import './StudentTag.scss';

const StudentTag = () => {
    const student = useContext(StudentContext);
    const { id } = student;
    const [tagInputVal, setTagInputVal] = useState("");

    function onFocusTagInput(inputId) {
        // highlighting the tag input area
        document.getElementById(inputId).style.outline = "none";
        document.getElementById(inputId).style.borderBottom = "1.5px solid";
    }

    function onBlurTagInput(inputId) {
        // un-highlighting the tag input area
        document.getElementById(inputId).style.outline = "none";
        document.getElementById(inputId).style.borderBottom = "1px solid";
    }

    function onChangeTagInput(e) {
        // limiting the input value to letters and numbers
        setTagInputVal(e.target.value.replace(/[^a-zA-Z\d]/ig, ""));
    }

    return (
        <div>
            <input id={`tag-input-${id}`} type="text" placeholder="Add a tag" style={{ border: "none", borderBottom: "1px solid" }} value={tagInputVal} onFocus={(e) => onFocusTagInput(e.target.id)} onBlur={(e) => onBlurTagInput(e.target.id)} onChange={(e) => onChangeTagInput(e)}></input>
        </div>
    );
};

export default StudentTag;