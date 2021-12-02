const request = require('request');
const fs = require('fs');


request('http://www.education.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the education.edu homepage.
  
  fs.writeFile('./index.html', body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("download complete");
  });
});

// within the function callback for the fs.writeFile().