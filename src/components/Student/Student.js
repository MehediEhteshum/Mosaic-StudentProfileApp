import React from 'react';

const Student = (props) => {
    const { student: { pic, firstName, lastName, email, company, skill, grades } } = props;

    return (
        <div>
            <img src={pic} alt={`${firstName} ${lastName}'s`} /><br />
            <b>{firstName} {lastName}</b><br />
            Email: {email}<br />
            Comapny: {company}<br />
            Skill: {skill}<br />
            Average: {grades.reduce((acc, curr) => {
                return parseFloat(acc) + parseFloat(curr);
            }) / grades.length}%<br /><br />
        </div>
    );
};

export default Student;