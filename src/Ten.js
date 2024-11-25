import React from 'react';

const Ten = () => {
    let quotes = [
        "Mayank", "Somani", "Monu", "Sonu"
    ];
    
    // Fixing Math usage and accessing the correct array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    return (
        <div>{quote}</div> // Displaying the randomly selected quote
    );
}

export default Ten;
