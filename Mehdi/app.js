let newsPaper = document.getElementById('newsPaper')
let Input = document.getElementById('Input')
let nextpage = ""


const createNews = async () => {
    url = 
    'https://newsdata.io/api/1/news?' +
    `apikey=pub_38553840d5b174265ffe11259d23a66dd878b&` +
    `q=${Input.value}`

  const newsUrl = await fetch(url)
  const news = await newsUrl.json()

  for (let item of news.results) {
    
    let description = item.description
    let myArray = description.split(" ")
    let length = myArray.length

    if (length > 20) {
      myArray.splice(20, (length - 1));
    }
    myArray.push("...")
    myArray = myArray.join(" ")

    newsPaper.innerHTML = newsPaper.innerHTML + `
    <div class="bg-white h-[600px] m-10 w-80 ">
    <img class="h-44 mt-4 mx-auto" src="${item.image_url}" alt="">
    <h2 class="font-2xl">${item.title}</h2>
    <br>
    <p>${myArray}</p>
    <a href="${item.link}">
    <button>Read more</button>
    </a>
     </div>`
  }
  console.log(news);
}