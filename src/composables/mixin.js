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