import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

import Student from '../Student/Student';
import './Students.css';

const Students = () => {
    // fetching students from api
    const url_students = "https://api.hatchways.io/assessment/students";
    const [students, setStudents] = useState([]);
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
            setStudents(data.students); // setting students list
        }).catch((err) => {
            setHasError(true); // setting error status
            setError(String(err));
            console.error(err);
        });
    }, []);

    return (
        <div>
            {
                hasError ?
                    <div className="d-flex justify-content-center p-4">
                        <Card id="error-card-shadow" style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Title id="error-card-title">Error: {error}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Please check your internet connection and try again later.</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    :
                    students.map((student) => {
                        return <Student student={student} />;
                    })
            }
        </div>
    );
};

export default Students;