import imageCompression from 'browser-image-compression';

export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

export const compressImage = async (file) => {
  const options = {
    maxSizeMB: 2,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  // if (psgFunc) {
  //   options.onProgress = psgFunc;
  // }

  try {
    return await imageCompression(file, options);
  } catch (error) {
    return ["error", error?.message];
  }
};

export const handleFileChange = async (event, selectedFile, profileImg = null) => {
  const file = event.target.files[0];
  if (!file) return;
  selectedFile.value = file;

  // Check if profileImg is defined and if file type is an image
    const reader = new FileReader();
    reader.onload = (event) => {
      // Set the src of profileImg to the data URL of the uploaded image
      profileImg.src = event.target.result;
    };
    
    reader.readAsDataURL(file);
  }

export const filterByKey = (key,arr) =>{
  return arr.filter((arr,index,self)=>index===self.findIndex((t)=> (t[key]===arr[key])))
}

export const formatDate = (dateString) =>{
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

// mixins/timeMixin.js
//set expiration date 
export function addMinutes(minutesToAdd) {
 
  return new Date(new Date().getTime() + minutesToAdd * 60000);
}


// or debounce mixins.   let debounce_timeout;
export const debounce = (fn, value) => {
  let debounce_timeout; // Declare debounce_timeout inside the debounce function

  // clear old timeout
  if (debounce_timeout) clearTimeout(debounce_timeout);

  // set new timeout
  debounce_timeout = setTimeout(() => {
    // execute the function after the timeout period
    fn(value);
  }, 1000);
};
