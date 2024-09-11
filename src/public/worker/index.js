self.onmessage = async (event) => {
  const { type, data } = event.data; // Destructure to get the task type and other data
  switch (type) {
    case 'sortMessages':
      handleSortMessages(data);
      break;
    
    case 'prepareTransaction':
      await handlePrepareTransaction(data); // Since this is async, ensure to await
      break;
    
    case 'someOtherTask':
      await handleOtherTask(data); // Async task, await for better flow control
      break;

    // Add more cases as needed for other tasks
    default:
      console.error(`Unknown task type: ${type}`);
      self.postMessage({
        success: false,
        message: `Unknown task type: ${type}`,
      });
      break;
  }
};

// Function to handle sorting messages
const handleSortMessages = ({ messages }) => {
  try {
    let arr = [...messages]; // Make a copy of the messages
    let alldata = arr.sort((a, b) => a.ordering_number - b.ordering_number); // Sort based on ordering_number
    self.postMessage({ success: true, type: 'sortMessages', messages: alldata });
  } catch (error) {
    self.postMessage({ success: false, type: 'sortMessages', message: `Error sorting messages: ${error.message}` });
  }
}

// Function to handle transaction preparation
const handlePrepareTransaction = async (transactions) => {
  console.log(transactions)
  try {
    if (Array.isArray(transactions)) {
      // Process the transactions here
      const processedData = transactions; // You can modify this line to include your actual processing logic
      self.postMessage({ success: true, type: 'prepareTransaction', result: processedData });
    } else {
      self.postMessage({ success: false, type: 'prepareTransaction', message: 'Transactions should be an array' });
    }
  } catch (error) {
    self.postMessage({ success: false, type: 'prepareTransaction', message: `Error preparing transaction: ${error.message}` });
  }
}


// Function to handle some other task
const handleOtherTask = async(data) => {
  try {
    // Implement other async task logic here, e.g., network request or heavy processing
    self.postMessage({ success: true, type: 'someOtherTask', result: 'Some result' });
  } catch (error) {
    self.postMessage({ success: false, type: 'someOtherTask', message: `Error in some other task: ${error.message}` });
  }
}
