import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { StudentContext } from '../../providers/StudentProvider/StudentProvider';
import { StudentTagsContext } from '../../providers/StudentTagsProvider/StudentTagsProvider';
import './StudentTags.scss';

const StudentTags = () => {
    const student = useContext(StudentContext);
    const [allTags, setAllTags] = useContext(StudentTagsContext);
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

    function onSubmitTagInput(e) {
        // getting tag value
        e.preventDefault(); // prevent refresh on 'enter'
        let tag = e.target[0].defaultValue; // tag value
        let tempAllTags = { ...allTags }; // creating temp copy of state
        if (tempAllTags[id] !== undefined) {
            // key 'student id' exists. Note: hasOwnProperty is slower
            if (!tempAllTags[id].includes(tag)) {
                // tag is not in the array
                tempAllTags[id].push(tag); // add to current student tags array
            }
        } else {
            // tags empty
            tempAllTags[id] = [tag]; // create new current student tags array
        }
        setAllTags(tempAllTags); // update all student tags object

        setTagInputVal(""); // reset input field value
    }

    function onClickCross(e) {
        if (e.target.nearestViewportElement !== null) {
            let tag = e.target.nearestViewportElement.previousSibling.innerText;
            let tempAllTags = { ...allTags }; // creating temp copy of state
            tempAllTags[id].splice(tempAllTags[id].indexOf(tag), 1); // delete from current student's tags array
            setAllTags(tempAllTags); // update all student tags object
        }
    }

    return (
        <div>
            {allTags[id] !== undefined ?
                <div className="row d-flex justify-content-start m-auto" id={`tags-div-${id}`}>
                    {
                        allTags[id].map((tag, i) => {
                            return <div className="col-auto px-2 py-1 mt-2 tag-div" id={`tag-div-${i}`}>
                                <span>{tag}</span>
                                <FontAwesomeIcon className="cross-ico" id={`cross-ico-${i}`} icon={faTimes} onClick={(e) => onClickCross(e)} />
                            </div>;
                        })
                    }
                </div> :
                <div></div>
            }
            <form className="tag-form" id={`tag-form-${id}`} onSubmit={(e) => onSubmitTagInput(e)} style={{ marginTop: "0.5rem" }}>
                <input id={`tag-input-${id}`} type="text" placeholder="Add a tag" style={{ border: "none", borderBottom: "1px solid" }} value={tagInputVal} onFocus={(e) => onFocusTagInput(e.target.id)} onBlur={(e) => onBlurTagInput(e.target.id)} onChange={(e) => onChangeTagInput(e)} required />
            </form>
        </div>
    );
};

export default StudentTags;