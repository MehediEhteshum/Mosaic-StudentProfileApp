import React, { createContext, useContext, useState, useEffect } from 'react';

import Students from '../../components/Students/Students';
import { StudentsDataContext } from '../StudentsDataProvider/StudentsDataProvider';

export const SearchedStudentsContext = createContext();

export const SearchedStudentsProvider = () => {
    const { studentsData } = useContext(StudentsDataContext);
    const [searchedStudents, setSearchedStudents] = useState(studentsData);

    useEffect(() => {
        setSearchedStudents(studentsData);
    }, [studentsData]);

    return (
        <SearchedStudentsContext.Provider value={{ "searchedStudents": searchedStudents, "setSearchedStudents": setSearchedStudents }}>
            <Students />
        </SearchedStudentsContext.Provider>
    );
};

export default SearchedStudentsProvider;