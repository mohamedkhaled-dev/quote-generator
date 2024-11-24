var lastRandom = -1;

function getQuote() {
  var quoteElement = document.getElementById("quote");
  var authorElement = document.getElementById("author");
  var quotes = [
    {quote: "❝ Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ❞", author: "― Bernard M. Baruch"},
    {quote: "❝ Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ❞", author: "― Albert Einstein"},
    {quote: "❝ You know you're in love when you can't fall asleep because reality is finally better than your dreams. ❞", author: "― Dr. Seuss"},
    {quote: "❝ If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. ❞", author: "― J.K. Rowling"},
    {quote: "❝ To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. ❞", author: "― Ralph Waldo Emerson"}
  ];

  var random = Math.floor(Math.random() * quotes.length);

  while (random === lastRandom) {
    random = Math.floor(Math.random() * quotes.length); 
  }

  quoteElement.innerText = quotes[random].quote;
  authorElement.innerText = quotes[random].author;

  lastRandom = random;
}

