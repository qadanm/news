var url = 'https://newsapi.org/v2/top-headlines?' 
            +
          'country=us&' 
            +
          'apiKey=5a772b016ff74d8abebed1a0ad570abb';

export function getNews() {
    return fetch(url)
      .then(res => res.json());
  }
  