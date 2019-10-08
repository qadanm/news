var url = 'https://newsapi.org/v2/top-headlines?' 
            +
          'country=us&' 
            +
          'apiKey=5a772b016ff74d8abebed1a0ad570abb';


// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })


export function getNews() {
    return fetch(url)
      .then(res => res.json());
  }
  