import React, { createContext, useState } from 'react';

import Students from '../Students/Students';

export const StudentTagsContext = createContext();

export const StudentTagsProvider = () => {
    const [allTags, setAllTags] = useState({});

    return (
        <StudentTagsContext.Provider value={[allTags, setAllTags]}>
            <Students />
        </StudentTagsContext.Provider>
    );
};