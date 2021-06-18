import React from 'react';
import Card from 'react-bootstrap/Card';

import './Student.scss';

const Student = (props) => {
    const { student: { pic, firstName, lastName, email, company, skill, grades } } = props;

    return (
        <div className="d-flex justify-content-center p-3">
            <Card id="student-card">
                <div className="row">
                    <div className="col-md-3 col-sm-5 d-flex justify-content-center align-items-center">
                        <img src={pic} alt={`${firstName} ${lastName}'s`} /><br />
                    </div>
                    <div className="col-md-9 col-sm-7 pt-3">
                        <Card.Body>
                            <Card.Title id="student-card-title">{firstName} {lastName}</Card.Title>
                            <Card.Text>
                                Email: {email}<br />
                                Comapny: {company}<br />
                                Skill: {skill}<br />
                                {/* calculating avg grade = grades.reduce/grades.length */}
                                Average: {grades.reduce((acc, curr) => {
                                    return parseFloat(acc) + parseFloat(curr);
                                }) / grades.length}%<br /><br />
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Student;