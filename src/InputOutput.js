import React from 'react';
import './css/InputOutput.css'; // Import the CSS for the text-content container
import freeGif from './assets/free.gif'; // Import the free access GIF
import privacyGif from './assets/privacy.gif'; // Import the privacy GIF
import TypingEffect from './TypingEffect'; // assuming TypingEffect.js is in the same directory

// Moved the content to GPTPart.js
export const content = {
    "Free Access": {
      text: "Enjoy the powerful features of GPT-4 at no cost with our free plan, which provides unlimited access, or upgrade to our premium plan for the advanced multi-modal vision capabilities.",
      gif: freeGif // Assign the imported GIF path
    },
    "Chat Privacy": {
      text: "GPT AI values your privacy. Chats remain safely on your device, offering both reviewable and erasable options, to protect the privacy and confidentiality of your conversations.",
      gif: privacyGif // Assign the imported GIF path
    },
    "Advanced reasoning": {
        text: "With broad general knowledge and domain expertise, GPT AI can follow complex instructions in natural language and solve difficult problems with accuracy.",
        inputText: "Mark is free between 9 am and 12:30 pm, Sam is available from 11 am to 1 pm and then 2 pm to 5 pm. Emma has time at 9:30 am for half an hour, and then 11:30 am to 2:30 pm. What are some options for start times for a thirty-minute meeting including Mark, Emma, and Sam?",
        outputText: `Mark: 9 am - 12:30 pm\nSam: 11 am - 1 pm, 2 pm - 5 pm\nEmma: 9:30 am - 10 am, 11:30 am - 2:30 pm\n\nCommon availability for a 30-minute meeting: 11:30 am - 12 pm`
    
    },
    "Visual input": {
        text: "GPT AI can accept images as inputs and answer general questions about the contents of the images you upload.",
        inputText: "What can I make with these ingredients?",
        inputImageURL: "https://images.openai.com/blob/9ad5a2ab-041f-475f-ad6a-b51899c50182/ingredients.png?trim=0,0,0,0&width=2000",
        outputText: "There are many options for what you can make with these ingredients! Some possibilities include:\n\n" +
                    "- Pancakes or waffles\n" +
                    "- Crepes\n" +
                    "- French toast\n" +
                    "- Omelette or frittata\n" +
                    "- Quiche\n" +
                    "- Custard or pudding\n" +
                    "- Cake or cupcakes\n" +
                    "- Muffins or bread\n" +
                    "- Cookies or biscuits\n\n" +
                    "These are just a few examples, but the possibilities are endless!"
    },
    };

    
      

    const InputOutput = ({ activeContent, activeMedia, activeInputOutput, activeKey }) => {
        return (
        <div className="content-gif-horizontal-layout">
          {/* New Paragraph and Try Now Button */}
          <div className="new-paragraph-and-try-now">
            <div className="new-paragraph-container">
              <p className="new-paragraph">
                {activeContent}
              </p>
            </div>
            <div id="gpt" className="try-now-container-gpt">
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

export default InputOutput;
