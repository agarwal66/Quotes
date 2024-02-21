const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotesBtn = document.getElementById("newQuotesBtn");
const tweetBtn = document.getElementById("tweetBtn");
let realData = [];
let quotesData = "";

const tweetNow = () =>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${(quotesData.text)} - ${(quotesData.author)}`;
    window.open(tweetPost);
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * realData.length);
    quotesData = realData[rnum];
    quotes.innerText = `${realData[rnum].text}`;

    quotesData.author == null ?
        (author.innerText = "Unknown")
        :(author.innerText = `${quotesData.author}`);
};

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
    } catch (error) {
        console.log(error);
    }
};

tweetBtn.addEventListener("click", tweetNow);
newQuotesBtn.addEventListener("click", getNewQuotes);
getQuotes();