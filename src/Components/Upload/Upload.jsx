import React, { useState, createContext, useContext } from "react";
import './Upload.css';
import { sendPrescription } from "../../Service/UserService";
import { useNavigate } from 'react-router-dom';


const ExtractedDataContext = createContext();

export const useExtractedData = () => useContext(ExtractedDataContext);

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [extractedText, setExtractedText] = useState(''); 
    const navigate = useNavigate(); 

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
            .then((response) => {
                try {
                    const extractedText = response.data;
                    
                    // Set the extracted text in state
                    setExtractedText(extractedText);
                    console.log('Extracted text:', extractedText);

                    // Navigate to the text page with the extracted text
                    navigate('/text', { state: { extractedText } });
                } catch (error) {
                    console.error('Error accessing response data:', error);
                    setErrorMessage('Error accessing response data. Please try again.');
                }
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
