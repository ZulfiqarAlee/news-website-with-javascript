// news api key 
//must install live server
var getDiv = document.getElementById("getDv");
let searchInput = document.getElementById("news");
let  getNews = ()=>{
    fetch(`https://newsapi.org/v2/everything?q=${searchInput.value}&from=2023-10-05&sortBy=publishedAt&apiKey=a0085e0eaa7b481d9968758574a5afa1`)

    .then(data => data.json())
    .then(data =>{
        console.log(data.articles);
        
        for(let i= 0; i < data.articles.length; i++){
        getDiv.innerHTML  += `
        <div class="card" style="width: 18rem;">
                <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data.articles[i].title}</h5>
                  <p class="card-text">${data.articles[i].description}t.</p>
                  <a href="${data.articles[i].url}" class="btn btn-primary">Read More</a>
                </div>
              </div>
        `
        }
    
    }
        ) 
    .catch(err => console.log(err))
}

