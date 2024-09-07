// fetchWorker.js

self.onmessage = (event) => {
  const { messages } = event.data;

  // Sort the messages by ordering_number
  let arr = [...messages];
  let alldata = arr.sort((a, b) => a.ordering_number - b.ordering_number);

  // Send sorted messages back to the main thread
  self.postMessage({ success: true, messages: alldata });

  console.log('Web Worker sent sorted messages.');
};




  
