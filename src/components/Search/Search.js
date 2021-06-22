import React, { useContext, useEffect, useState } from 'react';

import './Search.css';
import { StudentsDataContext } from '../../providers/StudentsDataProvider/StudentsDataProvider';
import { SearchedStudentsContext } from '../../providers/SearchedStudentsProvider/SearchedStudentsProvider';
import { StudentTagsContext } from '../../providers/StudentTagsProvider/StudentTagsProvider';

const Search = () => {
    const [searchTermName, setSearchTermName] = useState('');
    const [searchTermTag, setSearchTermTag] = useState('');
    const { studentsData } = useContext(StudentsDataContext);
    const { setSearchedStudents } = useContext(SearchedStudentsContext);
    const [allTags] = useContext(StudentTagsContext);

    useEffect(() => {
        let searchedStudentsByName = [...studentsData].filter((d) => {
            let name = (d.firstName + " " + d.lastName).toLowerCase();
            return name.includes(searchTermName);
        }); // searched by name. students array
        let searchedStudentsByTag = [...studentsData]; // default searched students array by tag
        if (searchTermTag !== "") {
            // if tag search term is not empty string
            let tempAllTags = Object.entries(allTags); // format [k, v] = [id, tags]
            let searchedStudentKeysByTag = Object.keys(Object.fromEntries(new Map(tempAllTags.filter(([_, v]) => {
                let tags = v.join(" ").toLowerCase();
                return tags.includes(searchTermTag);
            })))); // searched by tag. student keys array
            searchedStudentsByTag = [...studentsData].filter((d) => {
                return searchedStudentKeysByTag.includes(d.id);
            }); // searched by tag. students array
        }
        // common searched students by tag and name
        let searchedStudents = searchedStudentsByName.filter((s) => {
            return searchedStudentsByTag.includes(s);
        });
        setSearchedStudents(searchedStudents);
    }, [allTags, searchTermName, searchTermTag, setSearchedStudents, studentsData]);

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
        let searchTerm = (e.target.value).toLowerCase().trim();
        setSearchTermName(searchTerm);
    }

    function onChangeTagSearch(e) {
        let searchTerm = (e.target.value).toLowerCase().trim();
        setSearchTermTag(searchTerm);
    }

    return (
        <div className="row d-flex justify-content-center mt-4">
            <div className="col-auto mx-5 mb-2">
                <input className="search-input" id="search-name" type="text" placeholder="Search by name" onFocus={(e) => onFocusNameSearch(e.target.id)} onBlur={(e) => onBlurNameSearch(e.target.id)} onChange={(e) => onChangeNameSearch(e)} />
            </div>
            <div className="col-auto mx-5 mb-2">
                <input className="search-input" id="search-tag" type="text" placeholder="Search by tag" onFocus={(e) => onFocusNameSearch(e.target.id)} onBlur={(e) => onBlurNameSearch(e.target.id)} onChange={(e) => onChangeTagSearch(e)} />
            </div>
        </div>
    );
};

export default Search;