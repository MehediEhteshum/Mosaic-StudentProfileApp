import React, { createContext } from 'react';

import './StudentProvider.scss';
import StudentCard from '../StudentCard/StudentCard';

export const StudentContext = createContext();

export const StudentProvider = (props) => {
    const { student } = props;

    return (
        <StudentContext.Provider value={student}>
            <div className="d-flex justify-content-center">
                <StudentCard />
            </div>
        </StudentContext.Provider>
    );
};