chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'DATA') {
    console.log('Received React data:', request.data.reactData);
    console.log('Received Redux data:', request.data.reduxData);
    console.log('Received Next.js data:', request.data.nextData);
    console.log('Received build data:', request.data.buildData);
    // TODO: Process and store the data
  }
});
