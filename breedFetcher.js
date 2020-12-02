const request = require ('request');
const myArgs = process.argv.slice(2);

const url = 'https://api.thecatapi.com/v1/breeds/search?name=';
const breed = myArgs[0];;
const breedFetcher = function (url, breed) {
  request(url+breed,(error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(typeof body);
    const breedCat = JSON.parse(body);
    console.log(typeof breedCat);
    console.log(breedCat[0].description);
  });
}
breedFetcher (url, breed);
