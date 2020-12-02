const request = require ('request');
const myArgs = process.argv.slice(2);

const url = 'https://api.thecatapi.com/v1/breeds/search?name=';
const breed = myArgs[0];;
const breedFetcher = function (breed, callback) {
  request(url+breed,(error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const breedCat = JSON.parse(body);
   console.log(breedCat[0].name);
   console.log(breedCat[0].description);
    if (breed === breedCat[0].name) {
      callback(null, breedCat[0].description);
    } else { callback (null, 'breed not found');}
  });
};
breedFetcher (breed,(x) => console.log(x));
