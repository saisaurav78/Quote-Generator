
const btn = document.querySelector(".btn")
const quote = document.querySelector("#quote")
const author = document.querySelector("#author")
btn.onclick = () => {
    
    fetch("https://dummyjson.com/quotes/random")
        .then((resp) => resp.json())
        .then(data => { (quote.innerHTML = data.quote) +(author.innerHTML=data.author)})
}


