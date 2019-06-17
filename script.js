var newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

var endpoint = 'https://api.kanye.rest';

function getQuote() {

    fetch(endpoint)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayQuote(data.quote)
    })
    .catch(function(){
        console.log("An error has occurred trying to fetch!")
    });
}

function displayQuote(quote){

    const quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;

}
getQuote();