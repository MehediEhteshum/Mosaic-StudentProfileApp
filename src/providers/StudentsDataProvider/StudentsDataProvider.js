import React, { createContext, useState, useEffect } from 'react';

import { StudentTagsProvider } from '../StudentTagsProvider/StudentTagsProvider';

export const StudentsDataContext = createContext();

export const StudentsDataProvider = () => {
    // fetching students from api
    const url_students = "https://api.hatchways.io/assessment/students";
    const [studentsData, setStudentsData] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(url_students).then((res) => {
            if (res.ok) {
                // if res status ok
                return res.json();
            } else {
                throw Error(`Error ${res.status}`);
            }
        }).then((data) => {
            setStudentsData(data.students); // setting students list
        }).catch((err) => {
            setHasError(true); // setting error status
            setError(String(err));
            console.error(err);
        });
    }, []);

    return (
        <StudentsDataContext.Provider value={{ "studentsData": studentsData, "hasError": hasError, "error": error }}>
            <StudentTagsProvider />
        </StudentsDataContext.Provider>
    );
};

export default StudentsDataProvider;