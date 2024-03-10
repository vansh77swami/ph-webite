import React, { useEffect, useState } from 'react';

// Create a global object to keep track of the typing state, which will be cleared on page refresh
const typingCompletedSet = new Set();

const TypingEffect = ({ text, keyId }) => {
  const [typedText, setTypedText] = useState('');
  const typingSpeed = 25; // milliseconds per character

  useEffect(() => {
    setTypedText('');

    if (typingCompletedSet.has(keyId)) {
      setTypedText(text); // If typing is completed, set full text without typing effect
    } else {
      let timeoutId = null;

      const typeChar = () => {
        setTypedText((prevTypedText) => {
          if (prevTypedText.length < text.length) {
            return prevTypedText + text.charAt(prevTypedText.length);
          } else {
            typingCompletedSet.add(keyId); // Add this keyId to the set as typing completed
            return prevTypedText;
          }
        });
      };

      timeoutId = setInterval(typeChar, typingSpeed);
      return () => clearInterval(timeoutId);
    }
  }, [text, keyId]);

  const lines = typedText.split('\n');
  const formattedText = lines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== lines.length - 1 && <br />}
    </React.Fragment>
  ));

  const isTypingComplete = typedText === text;
  const cursorClass = `blink-cursor${isTypingComplete ? ' is-complete' : ''}`;

  return (
    <>
      <span className="typing-text">{formattedText}</span>
      <span aria-hidden="true" className={cursorClass}></span> {/* Blinking cursor */}
    </>
  );
};

export default TypingEffect;
