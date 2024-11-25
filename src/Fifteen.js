import React, { useState } from 'react';

const Fifteen = ({ items, itemsPerpage }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const indexofLastItem = currentPage * itemsPerpage;
    const indexofFirstItem = indexofLastItem - itemsPerpage;
    const currentItems = items.slice(indexofFirstItem, indexofLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerpage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul>
                {currentItems.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <ul>
                {pageNumbers.map((number) => (
                    <li key={number} onClick={() => setCurrentPage(number)}>
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Fifteen;


// array.slice(start, end);
// start: The index at which to start extraction (inclusive).
// end: The index at which to stop extraction (exclusive). If omitted, it extracts until the end of the array.