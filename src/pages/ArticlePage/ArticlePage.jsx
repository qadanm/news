
import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import '../ArticlePage/ArticlePage.css'


// var url = 'https://newsapi.org/v2/top-headlines?' 
//             +
//           'country=us&' 
//             +
//           'apiKey=5a772b016ff74d8abebed1a0ad570abb';


// function getNews() {
//   return fetch(url)
//     .then(res => res.json());
// }


function ArticlePage(props) {
  const news = props.index[props.match.params.id];

  return (
    <div>
      {news ?
        <div className='ContainerContainer'>
          <div className="ArticleViewContainer">
            <div className='img-container' style={{backgroundImage: "url(" + news.urlToImage + ")"}}>
              <div className='TextContainer'>
                <p className='TitleText'> {news.title} </p>
              </div>
            </div>
          </div>
          <div className="DescriptionContainer">
            <p className="DescriptionText">{news.description}</p>
          </div>
          <div className="ReadMoreContainer">
            <a className="ReadMoreText" href={`${news.url}`} target="_blank">Read More</a>
          </div>
        </div>
        :
        <div>
          <h1 style={{textAlign: "center"}}>loading...</h1> {console.log('the loading',news)}
        </div>
      }
    </div>
  );
}


// const ArticlePage = (props) => {

//   {

//     const article = props.news.filter(news=> {

//       return(
//         news
//       )
//     })

//     const index = props.index.filter(idx => {
//       return idx === {props.params.idx}
//     })

//     console.log(index,"<<<<<<<")



//   }


//   return(
    

//     <h1> السلام عليكم article page </h1>
//   )

//   };
  
  export default ArticlePage;