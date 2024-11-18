// Quotes array
let quotes = [
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author:"Amelia Earhart"
     },
    {
       quote:"Every strike brings me closer to the next home run.",
       author:"Babe Ruth"
    },
    {
       quote:"Definiteness of purpose is the starting point of all achievement.",
       author:"W. Clement Stone"
    },
    {
       quote:"We must balance conspicuous consumption with conscious capitalism.",
       author:"Kevin Kruse"
    },
    {
       quote:"Life is what happens to you while you’re busy making other plans.",
       author:"John Lennon"
    },
  ];
  
  // Initialize current quote index
  let currentQuoteIndex = 0;
  
  // Get quote container elements
  let quoteContainer = document.querySelector('.quote-container');
  let quoteElement = document.querySelector('.quote');
  let authorElement = document.querySelector('.author');
  let prevBtn = document.querySelector('.prev-btn');
  let nextBtn = document.querySelector('.next-btn');
  
  // Function to update quote
  function updateQuote() {
    let currentQuote = quotes[currentQuoteIndex];
    quoteElement.textContent = currentQuote.quote;
    authorElement.textContent = currentQuote.author;
  }
  updateQuote();
  
  // Add event listeners to navigation buttons
  prevBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    updateQuote();
  });
  
  nextBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    updateQuote();
  });
  

