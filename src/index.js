import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// function printWarning(level, format, args) {
//   // Validate if the console level is valid
//   const validLevels = ['log', 'warn', 'error', 'info', 'debug'];
//   if (!validLevels.includes(level)) {
//     throw new Error(`Invalid log level: ${level}`);
//   }

//   var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
//   var stack = ReactDebugCurrentFrame.getStackAddendum();

//   if (stack !== '') {
//     format += '%s';
//     args = args.concat([stack]);
//   }

//   // Ensure all args are strings
//   var argsWithFormat = args.map(String);

//   // Add the warning prefix to the format
//   argsWithFormat.unshift('Warning: ' + format);

//   // Use Function.prototype.apply.call to ensure correct context
//   Function.prototype.apply.call(console[level], console, argsWithFormat);
// }


