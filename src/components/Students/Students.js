import React, { useEffect, useState } from 'react';

import Student from '../Student/Student';

const Students = () => {
    // fetching students from api
    const url_students = "https://api.hatchways.io/assessment/students";
    const [students, setStudents] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(url_students).then((res) => {
            if (res.ok) {
                // if res status ok
                return res.json();
            } else {
                throw Error(`Error ${res.status}`);
            }
        }).then((data) => {
            setStudents(data.students); // setting students list
        }).catch((err) => {
            setHasError(true); // setting error status
            console.error(err);
        });
    }, []);

    return (
        <div>
            {
                hasError ?
                    <b>Something went wrong! :(</b> :
                    students.map((student) => {
                        return <Student student={student} />;
                    })
            }
        </div>
    );
};

export default Students;