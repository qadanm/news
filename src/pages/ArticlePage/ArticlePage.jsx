
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticlePage extends Component {
  state={
    news: 'hello'
  }

  componentDidMount(){
    this.setState({
      news: this.props.index[this.props.match.params.id]
    })
  }

  

  render() {
    // console.log(this.props.index)
    console.log(this.state.news)
    return(

      <div>
        <h1> {this.state.news.title} </h1>

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