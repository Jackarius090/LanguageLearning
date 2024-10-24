// import React, { useState } from 'react';

// const TranslateComponent = () => {
//   const [translation, setTranslation] = useState('');  // Holds the translated text
//   const apiKey = 'AIzaSyAJi2_QRyDaz-aH7fHmxqXhkKD950zVBuM';  // Replace this with your API key

//   const translateText = async () => {
//     try {
//       const response = await fetch(
//         `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             q: { highlightedText },      // Text to translate
//             target: "en", // Target language code
//           }),
//         }
//       );

//       const data = await response.json();
//       if (data && data.data && data.data.translations) {
//         setTranslation(data.data.translations[0].translatedText);  // Get the translated text
//       } else {
//         setTranslation('Error translating text');
//       }
//     } catch (error) {
//       console.error('Error with translation API:', error);
//       setTranslation('Failed to translate');
//     }
//   };

//     translateText();



//   return (

//     <p>{translation ? translation : 'No translation yet.'}</p>

//     )


//     <div className="translation-container">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter text:
//           <input
//             type="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Type text to translate"
//           />
//         </label>
//         <label>
//           Target language (code):
//           <input
//             type="text"
//             value={target}
//             onChange={(e) => setTarget(e.target.value)}
//             placeholder="e.g., es, fr, ru"
//           />
//         </label>
//         <button type="submit">Translate</button>
//       </form>

//       <div className="translated-text">
//         <h3>Translation:</h3>
//         <p>{translation ? translation : 'No translation yet.'}</p>
//       </div>
//     </div>
//   );
// };

// export default TranslateComponent;
