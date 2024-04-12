import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactJson from 'react-json-view';

const Devtools = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.type === 'DATA') {
        setData(request.data);
      }
    });
  }, []);

  return (
    <div>
      <h1>My React Redux Extension</h1>
      <ReactJson src={data} theme="monokai" />
    </div>
  );
};

ReactDOM.render(<Devtools />, document.getElementById('root'));
