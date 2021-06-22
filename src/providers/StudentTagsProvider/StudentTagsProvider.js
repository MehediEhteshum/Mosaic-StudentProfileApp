import React, { createContext, useState } from 'react';

import { SearchedStudentsProvider } from '../SearchedStudentsProvider/SearchedStudentsProvider';

export const StudentTagsContext = createContext();

export const StudentTagsProvider = () => {
    const [allTags, setAllTags] = useState({});

    return (
        <StudentTagsContext.Provider value={[allTags, setAllTags]}>
            <SearchedStudentsProvider />
        </StudentTagsContext.Provider>
    );
};