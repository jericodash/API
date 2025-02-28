const catBotton = document.getElementById('cat');
const dogBotton = document.getElementById('dog');
const quoteBotton = document.getElementById('qoute');

const catApiUrl = 'https://api.thecatapi.com/v1/images/search';
const dogApiUrl = 'https://dog.ceo/api/breeds/image/random';
const quoteApiUrl = 'https://inspirobot.me/api?generate=true';

catBotton.addEventListener('click', fetchCat);
dogBotton.addEventListener('click', fetchDog);
quoteBotton.addEventListener('click', fetchQuote);

function fetchCat() {
  fetch(catApiUrl)
    .then(response => response.json())
    .then(data => {
      const catImageURL = data[0].url;
      document.getElementById('catImage').src = catImageURL;
    })
    .catch(error => alert('Error fetching cat'));
}

function fetchDog() {
  fetch(dogApiUrl)
    .then(response => response.json())
    .then(data => {
      const dogImageURL = data.message;
      document.getElementById('dogImage').src = dogImageURL;
    })
    .catch(error => alert('Error fetching dog'));
}

function fetchQuote() {
  fetch(quoteApiUrl)
    .then(response => response.text())
    .then(quoteImageURL => {
      document.getElementById('quoteImage').src = quoteImageURL;
    })
    .catch(error => alert('Error fetching quote'));
}
