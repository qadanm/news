
import React from 'react';
import { Link } from 'react-router-dom';
import '../ArticlePage/ArticlePage.css'




// const withLifecycles = (MyStatelessComp) => class extends React.PureComponent {
//   static propTypes = {}
//   static displayName = ""
//   state = {}
//   componentDidMount() {}
//   render() {
//      return <MyStatelessComp {..this.state, ...this.props} />
//   }
// }



function ArticlePage(props) {






  const news = props.index[props.match.params.id];
  return (
    <div>
      {news ?
        <div className='ArticlePageContainer'>
          <div className="ArticlePageViewContainer">
            <div className='ArticlePageTextContainer'>
              <p className='ArticlePageTitleText'> {news.title} </p>
            </div>
            <div className="ArticlePageImageContainerContainer">
              <div className='ArticlePageImageContainer' style={{backgroundImage: "url(" + news.urlToImage + ")"}}></div>
            </div>
          </div>
          <div className="ArticlePageDescriptionContainer">
            <p className="ArticlePageDescriptionText">{news.description}</p>
          </div>
          <div className="ArticlePageReadMoreContainer">
            <a className="ArticlePageReadMoreText" href={`${news.url}`} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
          <div className="ArticlePageCheckOutContainer">
            <div className="ArticlePageCheckoutText">
              <p>Top headlines</p>
            </div>
          </div>
          <div className='ArticlesContainer'>
          {props.news.reverse().map((news, idx) => 


              <div className='articles' key={idx}>
                <Link
                  to={`/article/${idx}`}
                >

                <div className='news-square'>
                  <div className='img-container'>
                    <img src={news.urlToImage} alt="Article"/>
                  </div>
                  <div className='title'>
                   <p>{news.title}</p>
                  </div>
                </div>

                </Link>

                </div>
                
              )}
              </div>
        </div>
        :
        <div>
          <h1 style={{textAlign: "center"}}>loading...</h1>
        </div>
      }
    </div>
  );
}

  export default ArticlePage;