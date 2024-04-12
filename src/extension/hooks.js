// src/hooks.js

// Function to send data to the background script
const sendDataToBackground = () => {
  // Get the React DevTools data
  const reactData = window.__REACT_DEVTOOLS_GLOBAL_HOOK__?.getDevToolsState();

  // Get the Redux DevTools data
  const reduxData = window.__REDUX_DEVTOOLS_EXTENSION__?.getState();

  // Get the Next.js data
  const nextData = window.__NEXT_DATA__;

  // Get all __BUILD_* data
  const buildData = {};
  for (let key in window) {
    if (key.startsWith('__BUILD_')) {
      buildData[key] = window[key];
    }
  }

  // Send the data to the background script
  chrome.runtime.sendMessage({
    type: 'DATA',
    data: {
      reactData,
      reduxData,
      nextData,
      buildData,
    },
  });
};

// Send data immediately when the script is injected
sendDataToBackground();

// Send data every 5 seconds
setInterval(sendDataToBackground, 5000);
