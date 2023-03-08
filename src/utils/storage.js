// this file contain functions for interact with browser storage

// first make a way to validate getting the key and correct type
const validateKey = key => {
    if (!key || typeof key!== 'string') {
      throw new Error('Invalid storage key provided');
    }
  }

  // Save value to browser storage based on key
  export const storageSave = (key, value) => {
    validateKey(key)
    sessionStorage.setItem(key, JSON.stringify(value));
  };
  
  //read content from browser storage based on key
  export const storageRead = (key) => {
    validateKey(key)
    const data = sessionStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  
    return null;
  };
  
// possible to delete from browser storage based on key
  export const storageDelete = (key) => {
    validateKey(key)
    sessionStorage.removeItem(key);
  };