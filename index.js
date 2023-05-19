const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const genQuoteBtn = document.getElementById("gen-quote-btn");

function randomQuote() {
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const { text, author } = data[randomIndex];
      quoteText.innerHTML = text;
      quoteAuthor.innerHTML = author;
    });
}

randomQuote();

const addQuote = () => {
  randomQuote();
}
