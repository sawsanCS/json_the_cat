const request = require('request');
const myArgs = process.argv.slice(2);

const url = 'https://api.thecatapi.com/v1/breeds/search?name=';
const breed = myArgs[0];
/*const breedFetcher = function(breed, callback) {
  request(url + breed,(error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const breedCat = JSON.parse(body);
    console.log(breedCat[0].name);
    console.log(breedCat[0].description);
    if (breed === breedCat[0].name) {
      callback(null, breedCat[0].description);
    } else {
      callback(null, 'breed not found');
    }
  });
};*/
const fetchBreedDescription = function(breedName, callback) {
  request (url+breedName, (error, response, body) => {
    if (error) {
      callback (error, null);
      return;
    }
    const data = JSON.parse(body);
    if(breedName === data[0].name) {
      callback(null, data[0].description);
    }
    else {
      callback(null, 'no breed found');
    }
    
  })
  };
  
fetchBreedDescription(breed, (err, x)=> console.log(x));
module.exports = fetchBreedDescription;