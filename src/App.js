/* 
TODO
1. Add File Picker Component (With Drag in feature as per the Figma)
2. Add Image Preview Component
3. Add Enhance Button
4. Add Enhanced Image Preview Component (to replace the Image Preview component)
5. Add the Toggle for Advanced Mode
6. Add the Advanced Mode Component
*/


import React, { useState } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);

  // Handle image upload
  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  // Dummy function to call AI API
  const enhanceImage = async () => {
    // Here you can call your backend API or TensorFlow.js model to enhance the image
    const response = await fetch('YOUR_API_URL', {
      method: 'POST',
      body: JSON.stringify({
        image: selectedImage
      })
    });
    const enhancedData = await response.json();
    setEnhancedImage(enhancedData.enhancedImageUrl); // Assume the API returns an enhanced image URL
  };

  return (
    <div className="App">
      <h2>PSR Enhancement</h2>
      
      <input type="file" accept="image/*" onChange={handleImageChange} />
      
      {selectedImage && (
        <div>
          <h3>Original Image</h3>
          <img src={selectedImage} alt="Original" width="300px" />
        </div>
      )}

      <button onClick={enhanceImage}>Enhance Image</button>

      {enhancedImage && (
        <div>
          <h3>Enhanced Image</h3>
          <img src={enhancedImage} alt="Enhanced" width="300px" />
        </div>
      )}
    </div>
  );
}

export default App;
