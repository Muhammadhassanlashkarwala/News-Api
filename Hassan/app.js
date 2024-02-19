const Input = document.querySelector("#Input")
const newsPaper = document.querySelector("#newsPaper")
const createNews = async () => {
 url = 
 `https://newsdata.io/api/1/news?` +
 `apikey=pub_38553840d5b174265ffe11259d23a66dd878b&` +
 `q=${Input.value}`

const newsUrl = await fetch(url)
const news = await newsUrl.json()
 console.log(news);


 for (let item of news.results) {



    
    newsPaper.innerHTML = newsPaper.innerHTML + `
    <div class="d-flex">
    <img class="w-20 mt-4 d-flex" src="${item.image_url}" alt="">
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    <a href="${item.link}">
    <button>Read more</button>
    </a>
     </div>`
 }
}


