const request = require ('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?name=';
const breed = 'Siberian';
const breedFetcher = function (url, breed) {
  request(url+breed,(error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(typeof body);
    const breedCat = JSON.parse(body);
    console.log(breedCat);
  });
}
breedFetcher (url, breed);
