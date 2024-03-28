import React, { useState } from "react";
import './Upload.css';

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

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
            // Proceed with upload
            console.log('Upload the selected file:', selectedFile);
            // You can perform further actions, such as sending the file to a server
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
    );
}

export default Upload;
