import React, { useState, createContext, useContext } from "react";
import './Upload.css';
import { sendPrescription } from "../../Service/UserService";
import { useNavigate } from 'react-router-dom';

// Step 1: Create a new context
const ExtractedDataContext = createContext();

// Step 2: Export a custom hook to use this context
export const useExtractedData = () => useContext(ExtractedDataContext);

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [extractedText, setExtractedText] = useState(''); // Define extractedText state
    const navigator = useNavigate(); // Get the navigation function

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (file && allowedTypes.includes(file.type)) {
            setSelectedFile(file);
            setErrorMessage('');
        } else {
            setSelectedFile(null);
            setErrorMessage('Please select a valid image file (JPEG, PNG, or GIF).');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile) {
            sendPrescription(selectedFile)
                .then((data) => {
                   
                    setExtractedText(data);
                    console.log('Extracted text:', data);
                    console.log(extractedText);

                   
                    navigator('/text');
                })
                .catch((error) => {
                    console.error('Error uploading file:', error);
                    setErrorMessage('Error uploading file. Please try again.');
                });
        } else {
            setErrorMessage('Please select an image file.');
        }
    };
    
    const handleCancel = () => {
        setSelectedFile(null);
        setErrorMessage('');
        // Clear the file input
        document.getElementById('images').value = '';
    };

    return (
        // Step 4: Provide context value in Upload component
        <ExtractedDataContext.Provider value={extractedText}>
            <div className="container">
                <div className="head">Upload Prescription Image</div>
                <form className="form" onSubmit={handleSubmit} encType="" autoComplete="off">
                    <div className="image-preview">
                        {selectedFile && (
                            <img src={URL.createObjectURL(selectedFile)} alt="Preview" />
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="caption">Prescription</label>
                        <input type="text" name="caption" id="caption" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="file" id="images" name="images" onChange={handleFileChange} accept="image/jpeg, image/png, image/gif" />
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <div className="form-group">
                        <button type="submit">Upload images</button>
                        {selectedFile && <button type="button" onClick={handleCancel}>Cancel</button>}
                    </div>
                </form>
            </div>
        </ExtractedDataContext.Provider>
    );
}

export default Upload;
