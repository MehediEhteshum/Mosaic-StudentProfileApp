import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';

import { StudentsDataContext } from '../../providers/StudentsDataProvider/StudentsDataProvider';
import { StudentProvider } from '../../providers/StudentProvider/StudentProvider';
import { SearchedStudentsContext } from '../../providers/SearchedStudentsProvider/SearchedStudentsProvider';
import Search from '../Search/Search';
import './Students.css';

const Students = () => {
    const { hasError, error } = useContext(StudentsDataContext);
    const { searchedStudents } = useContext(SearchedStudentsContext);

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
                    <div>
                        <Search />
                        {
                            searchedStudents.length > 0 ?
                                searchedStudents.map((student) => {
                                    return <div>
                                        <StudentProvider student={student} />
                                    </div>;
                                }) :
                                <div></div>
                        }
                    </div>

            }
        </div >
    );
};

export default Students;