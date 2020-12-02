const fetchBreedDescription = require('./breedFetcher');
const myArgs = process.argv.slice(2);
const breed = myArgs[0];
fetchBreedDescription(breed, (err, x)=> console.log(x));