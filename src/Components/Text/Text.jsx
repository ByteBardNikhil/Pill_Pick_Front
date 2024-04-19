import React, { useEffect, useState } from 'react';
import Text from './Text'; // Import Text component

const Upload = () => {
    const [extractedText, setExtractedText] = useState('');

    // Assuming you fetch the extracted text and update extractedText state here

    return (
        <div>
            {/* Pass extractedText as a prop to Text component */}
            <Text extractedText={extractedText} />
        </div>
    );
}

export default Upload;
