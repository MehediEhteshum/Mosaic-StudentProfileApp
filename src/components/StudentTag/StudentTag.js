import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { StudentContext } from '../StudentProvider/StudentProvider';
import { StudentTagsContext } from '../StudentTagsProvider/StudentTagsProvider';
import './StudentTag.scss';

const StudentTag = () => {
    const student = useContext(StudentContext);
    const [allTags, setAllTags] = useContext(StudentTagsContext);
    const { id } = student;
    const [tagInputVal, setTagInputVal] = useState("");
    const [thisTags, setThisTags] = useState([]); // current student tags

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
        if (Object.keys(allTags).length !== 0 && allTags[id] !== undefined) {
            // tags not empty and key 'student id' exists. Note: hasOwnProperty is slower
            allTags[id].add(tag);
        } else {
            // tags empty
            allTags[id] = new Set().add(tag);
        }
        setAllTags(allTags); // update student tags map
        setThisTags([...allTags[id]]); // set current student tags

        setTagInputVal(""); // reset input field value
    }

    return (
        <div>
            <div className="row d-flex justify-content-start m-auto" id={`tags-div-${id}`}>
                {
                    thisTags.map((tag) => {
                        return <div className="col-auto px-2 py-1 mt-2" id="tag-div">
                            {tag}<FontAwesomeIcon id="cross-ico" icon={faTimes} />
                        </div>;
                    })
                }
            </div>
            <form id={`tag-form-${id}`} onSubmit={(e) => onSubmitTagInput(e)} style={{ marginTop: "0.5rem" }}>
                <input id={`tag-input-${id}`} type="text" placeholder="Add a tag" style={{ border: "none", borderBottom: "1px solid" }} value={tagInputVal} onFocus={(e) => onFocusTagInput(e.target.id)} onBlur={(e) => onBlurTagInput(e.target.id)} onChange={(e) => onChangeTagInput(e)}></input>
            </form>
        </div>
    );
};

export default StudentTag;