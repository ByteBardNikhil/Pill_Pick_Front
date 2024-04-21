import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Text.css';
import { useNavigate } from 'react-router-dom';

const Text = () => {
    const navigate = useNavigate(); // Get the navigation function

    const location = useLocation();
    const [extractedText, setExtractedText] = useState(location.state?.extractedText || '');
    const [formData, setFormData] = useState({ name: '', age: '', medicine: '' });
    const [searchedMedicine, setSearchedMedicine] = useState('');

    useEffect(() => {
        // Extract name, age, and medicine from the extracted text
        const nameMatch = extractedText.match(/Name\s*-\s*([^,]+)/i);
        const ageMatch = extractedText.match(/Age\s*-\s*([^,]+)/i);
        const medicineMatch = extractedText.match(/Medicine\s*-\s*(\S+)/i);

        // Update form data with extracted values
        if (nameMatch) setFormData(prev => ({ ...prev, name: nameMatch[1].trim() }));
        if (ageMatch) setFormData(prev => ({ ...prev, age: ageMatch[1].trim() }));
        if (medicineMatch) setFormData(prev => ({ ...prev, medicine: medicineMatch[1].trim() }));
    }, [extractedText]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted Form Data:", formData);
        setSearchedMedicine(formData.medicine);
        navigate('/medicinedetail');
        // Here you can add additional actions upon form submission
    };

    return (
        <div className="container">
            <h1>Edit and Submit Text</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                        type="text"
                        id="age"
                        value={formData.age}
                        onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))} />
                </div>
                <div className="form-group">
                    <label htmlFor="medicine">Medicine:</label>
                    <input
                        type="text"
                        id="medicine"
                        value={formData.medicine}
                        onChange={(e) => setFormData(prev => ({ ...prev, medicine: e.target.value }))} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Text;
