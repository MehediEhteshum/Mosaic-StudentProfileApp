import React, { createContext } from 'react';

import StudentCard from '../../components/StudentCard/StudentCard';

export const StudentContext = createContext();

export const StudentProvider = (props) => {
    const { student } = props;

    return (
        <StudentContext.Provider value={student}>
                <StudentCard />
        </StudentContext.Provider>
    );
};