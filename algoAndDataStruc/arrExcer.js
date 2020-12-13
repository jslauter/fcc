function numObj(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let object = {};
      object[arr[i]] = String.fromCharCode(arr[i]);
      result.push(object);
    }
    return result;
  }
