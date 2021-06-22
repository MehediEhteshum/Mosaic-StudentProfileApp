import React, { useContext } from 'react';

import { StudentContext } from '../../providers/StudentProvider/StudentProvider';

const Grades = () => {
    const student = useContext(StudentContext);
    const { id, grades } = student;

    return (
        <div id={`grades-div-${id}`} style={{ display: "none" }}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Test</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.map((g, i) => {
                        return <tr>
                            <th>Test {i + 1}</th>
                            <td>{g}%</td>
                        </tr>;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Grades;