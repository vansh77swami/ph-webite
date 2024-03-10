import './css/InputOutput.css'; // Import the CSS for the text-content container
import './css/ArtfulInputOutput.css'; // Import the CSS for the text-content container
import React, { useState } from 'react';


const ArtfulProductCard = ({ modelName, modelDescription, imageUrl }) => {
  return (
    <div className="artful-product-card">
      <div className="artful-product-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="artful-product-info">
        <div  className="artful-product-name-text">{modelName}</div>
        <div className="artful-launch-date">{modelDescription}</div>
      </div>
    </div>
  );
};

// Assuming each "row" of models has a fixed number of cards
const modelsPerPage = 4; // For example, 4 cards per page

// Moved the content to ArtfulPart.js
export const artfulContent = {
  "Models": {
    text: "Artful powered by a diverse set of models with different capabilities.",
    data: [
      {
        modelName: "Stable Diffusion XL",
        modelDescription: "The next phase of the core diffusion model. Stunning outputs, even with short prompts.",
        imageUrl: "https://i.ibb.co/4NDTLZy/artful-astronaut-1.webp"
      },
      {
        modelName: "Dalle 3",
        modelDescription: "A standout model known for its versatility and exceptionally accurate image outputs. By OpenAI.",
        imageUrl: "https://i.ibb.co/2d7V4j3/dalle-3.png"
      },
      {
        modelName: "Kandinsky 3",
        modelDescription: "A versatile model that excels at realism and higher quality outputs.",
        imageUrl: "https://i.ibb.co/F0tm1BZ/kandinsky-3.png"
      },
      {
        modelName: "Juggernaut XL",
        modelDescription: "Juggernaut XL generates ultra realistic images equivalent of real world camera images.",
        imageUrl: "https://i.ibb.co/mH4J2Rc/juggernaut-XL.png"
      },
      {
        modelName: "Kandinsky 2.2",
        modelDescription: "This model excels at creating realistic images, capturing fine details, and depicting wide scenes.",
        imageUrl: "https://i.ibb.co/HVmzQfv/kandinsky-2.png"
      },
      // You can continue to add more models following the same object structure.
    ]
  },
    "Image generation": {
        text: "Artful can create original, realistic images and art from a text description. It can combine concepts, attributes, and styles.",
        inputText: "An image of a palm tree wearing a Hawaiian shirt, beach hat and playing guitar",
        outputImageURL: "https://i.ibb.co/f8970sy/artful-img.webp",
    
    },
    
  };
    
  const ArtfulInputOutput = ({
    activeContent,
    activeMedia,
    activeInputOutput,
    activeKey
  }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(artfulContent["Models"].data.length / modelsPerPage);
    
    // Handler for the "Next" button
    const handleNext = () => {
      setCurrentPage((prevPage) => (prevPage + 1 < totalPages ? prevPage + 1 : prevPage));
    };
    
    // Handler for the "Previous" button
    const handlePrev = () => {
      setCurrentPage((prevPage) => (prevPage - 1 >= 0 ? prevPage - 1 : prevPage));
    };
  
    // Display only the current page models
    const startIndex = currentPage * modelsPerPage;
    const selectedModels = artfulContent["Models"].data.slice(startIndex, startIndex + modelsPerPage);
    const additionalClassName = activeKey === 'Models' ? 'column-layout' : '';

      return (
<div className={`content-gif-horizontal-layout ${additionalClassName}`}>          {/* New Paragraph and Try Now Button */}
          <div className="new-paragraph-and-try-now">
            <div className="new-paragraph-container">
              <p className="new-paragraph">
                {activeContent}
              </p>
            </div>
            <div className="try-now-container">
              <a href="https://play.google.com/store/apps/details?id=com.projecthit.artful" 
                 className="try-now-button" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Try now
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="try-now-icon" aria-hidden="true">
                  <polygon fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"></polygon>
                </svg>
              </a>
            </div>
          </div>
    
          {/* Conditionally render GIF or Text Content Container if not 'Models' */}
      {activeKey !== 'Models' && (
        <div className={activeMedia && activeMedia.type === 'gif' ? "gif-container" : "text-content-container"}>
          {activeMedia && activeMedia.type === 'gif' ? (
            <img src={activeMedia.content} alt="Content visual" className="active-gif" />
          ) : (
            <>
              {/* Input Part */}
              <div className="input-container">
                <h3 className="input-heading">Input</h3>
                <p className="input-text">
                  {activeInputOutput?.inputText}
                </p>
                {/* Display image if inputImageURL is present */}
                {activeInputOutput?.inputImageURL && (
                  <img src={activeInputOutput.inputImageURL} alt="Visual Input" className="active-input-img" />
                )}
              </div>

              {/* Divide Line */}
              <div className="divide-line"></div>

              {/* Output Part */}
              <div className="output-container">
                <h3 className="output-heading">Output</h3>
                <div className="output-text">{activeInputOutput?.outputText}</div>
                {/* Check for output images in the 'Image generation' section */}
                {activeKey === "Image generation" && activeInputOutput?.outputImageURL && (
                  <div className="active-output-img-container">
                    <img src={activeInputOutput.outputImageURL} alt="Output visual" className="active-output-img" />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
      
      {/* Display Product Cards for 'Models' */}
      {activeKey === 'Models' && (
        <>
        {/* Pagination buttons container */}
        <div className="pagination-buttons-container">
            <button onClick={handlePrev} disabled={currentPage === 0} className="pagination-button">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="a-icon--arrow-left" aria-hidden="true" style={{ transform: "rotate(180deg)", width: "1em", height: "1em" }}>
                <polygon fill="currentColor" points="8.75 3.27 7.77 4.25 10.83 7.31 2 7.31 2 8.69 10.83 8.69 7.77 11.75 8.75 12.73 13.48 8 8.75 3.27"></polygon>
              </svg>
            </button>
            <button onClick={handleNext} disabled={currentPage === totalPages - 1} className="pagination-button">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="a-icon--arrow-right400 a-icon--text relative a-icon--no-align md:top-[.075em] block h-16 md:ml-4 md:inline md:h-auto" data-new="" aria-hidden="true" style={{ width: "1em", height: "1em" }}>
                <polygon fill="currentColor" points="8.75 3.27 7.77 4.25 10.83 7.31 2 7.31 2 8.69 10.83 8.69 7.77 11.75 8.75 12.73 13.48 8 8.75 3.27"></polygon>
              </svg>
            </button>
          </div>
          <div className="artful-product-cards-container">
            {selectedModels.map((model, index) => (
              <ArtfulProductCard 
                key={index}
                modelName={model.modelName}
                modelDescription={model.modelDescription}
                imageUrl={model.imageUrl}
                className="artful-product-card"
              />
            ))}
          </div>
          
        </>
      )}
    </div>
  );
};

export default ArtfulInputOutput;