import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';

import { StudentsDataContext } from '../StudentsDataProvider/StudentsDataProvider';
import { StudentProvider } from '../StudentProvider/StudentProvider';
import Search from '../Search/Search';
import './Students.css';

const Students = () => {
    const [studentsData, hasError, error] = useContext(StudentsDataContext);

    return (
        <div>
            {
                hasError ?
                    <div className="d-flex justify-content-center p-4">
                        <Card id="error-card">
                            <Card.Body>
                                <Card.Title id="error-card-title">Error: {error}</Card.Title>
                                <Card.Subtitle className="mb-2">Please check your internet connection and try again later.</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    :
                    studentsData.length > 0 ?
                        <div>
                            <Search />
                            {studentsData.map((student) => {
                                return <div>
                                    <StudentProvider student={student} />
                                </div>;
                            })}
                        </div> :
                        <div></div>

            }
        </div >
    );
};

export default Students;