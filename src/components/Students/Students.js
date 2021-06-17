import React, { useEffect, useState } from 'react';

const Students = () => {
    // fetching students from api
    const url_students = "https://api.hatchways.io/assessment/students";
    const [students, setStudents] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(url_students).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw Error(`Error ${res.status}`);
            }
        }).then((data) => {
            setStudents(data.students);
        }).catch((err) => {
            setHasError(true);
            console.error(err);
        });
    }, []);

    return (
        <div>

        </div>
    );
};

export default Students;