import React from 'react';
import './css/InputOutput.css'; // Import the CSS for the text-content container
import freeGif from './assets/free.gif'; // Import the free access GIF
import privacyGif from './assets/privacy.gif'; // Import the privacy GIF
import TypingEffect from './TypingEffect'; // assuming TypingEffect.js is in the same directory

// Moved the content to GPTPart.js
export const Gempartcontent = {
  "Creativity": {
    text: "Gem AI is creative and collaborative, able to generate, edit, and iterate on creative and technical writing tasks with users, such as composing songs, writing screenplays, or learning a user’s writing style.",
    inputText: "Explain the plot of Cinderella in a sentence where each word has to begin with the next letter in the alphabet from A to Z, without repeating any letters.",
    outputText: `A beautiful Cinderella, dwelling eagerly, finally gains happiness; inspiring jealous kin, love magically nurtures opulent prince; quietly rescues, slipper triumphs, uniting very wondrously, xenial youth zealously.`

},

"Chat Privacy": {
  text: "Gem AI values your privacy. Chats remain safely on your device, offering both reviewable and erasable options, to protect the privacy and confidentiality of your conversations.",
  gif: privacyGif // Assign the imported GIF path
},
    "Free Access": {
      text: "Enjoy the advanced multi-modal features of Gemini Pro & Vision at no cost, we don’t have complex TPM restrictions. Instead, a simple credit-based system to provide a secure and reliable service.",
      gif: freeGif // Assign the imported GIF path
    },

    "Visual input": {
      text: "Gem AI can accept images as inputs and answer general questions about the contents of the images you upload.",
      inputText: "Identify all the food items in the image.",
      inputImageURL: "https://i.ibb.co/T2wyqrP/0-Eap5m-R5-UB3a-IPl-TQ.webp",
      outputText: "In the image, I see the following food items:\n\n- A bowl of chia pudding with banana, kiwi, blackberries, and strawberries.\n- Two slices of whole grain bread.\n- An avocado cut in half with the pit still in one half.\n- A bunch of green grapes.\n- More green grapes placed separately near the bowl.\n- A whole orange.\n- A glass of orange juice.\n\nThe table also features a spoon and some kind of condiment in a small bowl, but it's not clear exactly what the condiment is."
  },



    };

    
      

    const GemInputOutput = ({ activeContent, activeMedia, activeInputOutput, activeKey }) => {
        return (
        <div className="content-gif-horizontal-layout">
          {/* New Paragraph and Try Now Button */}
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
      
          {/* GIF or Text Content Container */}
           <div className={activeMedia && activeMedia.type === 'gif' ? "gif-container" : "text-content-container"}>
        {activeMedia && activeMedia.type === 'gif' ? (
          <img src={activeMedia.content} alt="Content visual" className="active-gif"/>
        ) : (
              <>
               {/* Input Part */}
                <div className="input-container">
                <h3 className="input-heading">Input</h3>
                <p className="input-text">
                    {activeInputOutput?.inputText}
                </p>
                {/* Condition to check and display image if inputImageURL is present */}
                {activeInputOutput?.inputImageURL && (
                    <img src={activeInputOutput.inputImageURL} alt="Visual Input" className="active-input-img" />
                )}
                </div>

                {/* Divide Line */}
                <div className="divide-line"></div>
      
                 {/* Output Part */}
                <div className="output-container">
                <h3 className="output-heading">Output</h3>
                <div className="output-text">
                    <TypingEffect keyId={activeKey} text={activeInputOutput?.outputText} />
                    {/* Remove any other spans with class blink-cursor */}
                </div>
                </div>
              </>
            )}
          </div>
        </div>
      );
      
};

export default GemInputOutput;
