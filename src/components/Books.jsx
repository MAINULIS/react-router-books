import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {
    const booksData = useLoaderData();
    return (
        <div>
            <h3>This is books corner</h3>
        </div>
    );
};

export default Books;