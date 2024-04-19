import React, { useState } from 'react';

const Upload = () => {
    const [extractedText, setExtractedText] = useState('');

    // Function to handle text changes in the input
    const handleTextChange = (event) => {
        setExtractedText(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action
        console.log("Submitted Text:", extractedText); // Log the submitted text, or process it as needed
        // Here you can add additional actions upon submission, such as sending data to a server or redirecting the user
    };

    return (
        <div className='container'>
            <h1>Search Page</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={extractedText} 
                    onChange={handleTextChange} // Now this input is fully controlled
                />
                <button type="submit">Submit</button> 
            </form>
        </div>
    );
}

export default Upload; // Ensure that the exported name matches the file name or usage
