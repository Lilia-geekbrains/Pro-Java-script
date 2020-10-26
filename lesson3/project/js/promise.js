let makegetRequest = (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status == 200) {
            resolve(xhr.responseText);
          } else {
            reject('error!');
          }
        }
      };
      xhr.send();
    });
   };
  
   makegetRequest("tel.json")
                          .then((response) => {
                            console.log(response);
                          });