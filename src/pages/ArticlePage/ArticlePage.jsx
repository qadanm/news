
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


class ArticlePage extends Component {
    state={
      news: null,
      user: null
    }
  


componentDidMount(){
  console.log('000000000hitting')

  console.log('State:', this.props.index[this.props.match.params.id])
    this.setState({
      news: this.props.index[this.props.match.params.id]
    })
   
  }

  createFavorite = (news = this.state.news) => {
    news.findById(this.props.index[this.props.match.params.id], function(user) {
      user.favoratedArticles.push();
      user.save()
    });
  }

  // componentDidUpdate(){
  //   console.log('hitting')
  // }
  

  render() {
    // console.log(this.props.index)
    console.log(this.state.news)
    return(
      <div>
      {this.state.news ? 

        <div className='ContainerContainer'>
        {/* {this.state.news ? */}
        <>
        <div className="ArticleViewContainer">
  
          <div className='img-container' style={{backgroundImage: "url(" + this.state.news.urlToImage + ")"}}>
  
            <div className='TextContainer'>
  
                <p className='TitleText'> {this.state.news.title} </p>
  
            </div>
  
          </div>
  
        </div>
  
  
  
        <div className="DescriptionContainer">
          
  
  
        <p className="DescriptionText">{this.state.news.description}</p>
  
  
  
        </div>
  
  
        <div className="ReadMoreContainer">
                
  
  
        <a className="ReadMoreText" href={`${this.state.news.url}`} target="_blank">Read More</a>
  
  
  
        </div>
  
        </>
  
        {/* :
        console.log('not working article page')
        } */}
        </div>
        // <div>dsf</div>
        :
        <div>
          
          loading... {console.log('the loading',this.state.news)}
        
        
        </div>
      
      }
    </div>
  
    
      
 
    )
  }
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